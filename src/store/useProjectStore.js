import { create } from "zustand";

export const useProjectStore = create((set) => ({
  projects: [],
  loading: false,
  error: null,
  sortOrder: "desc", // default newest first

  fetchProjects: async (username) => {
    try {
      set({ loading: true, error: null });

      const reposRes = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=100`
      );
      const repos = await reposRes.json();

      // Sort repos by creation date
      const sortedRepos = repos.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      });

      const projects = await Promise.all(
        sortedRepos.map(async (repo) => {
          let image = null;

          try {
            const readmeRes = await fetch(
              `https://api.github.com/repos/${username}/${repo.name}/readme`
            );

            if (readmeRes.ok) {
              const readmeData = await readmeRes.json();
              const content = atob(readmeData.content);
              const imgMatch = content.match(/!\[.*?\]\((.*?)\)/);
              if (imgMatch) image = imgMatch[1];
            }
          } catch (err) {
            console.warn(`No README or image found for ${repo.name} + ${err}`);
          }

          return {
            id: repo.id,
            title: repo.name,
            description: repo.description || "No description provided.",
            repoUrl: repo.html_url,
            liveUrl: repo.homepage || null,
            image,
            createdAt: repo.created_at,
            updatedAt: repo.updated_at,
          };
        })
      );

      set({ projects, loading: false });
    } catch (error) {
      console.error(error);
      set({ error: "Failed to load projects.", loading: false });
    }
  },

  // 🧩 Optional: toggle sorting (asc/desc)
  toggleSortOrder: () =>
    set((state) => ({
      sortOrder: state.sortOrder === "asc" ? "desc" : "asc",
      projects: [...state.projects].reverse(),
    })),
}));
