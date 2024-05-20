import baseApi from "../baseApi";

const tasksApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get all tasks
    getAllTasks: builder.query({
      query: () => "/tasks",
      providesTags: ["tasks"],
    }),
    // post task
    createATask: builder.mutation({
      query: (data) => ({
        url: "/tasks",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["tasks"],
    }),

    // update task
    updateATask: builder.mutation({
      query: ({ id, data }) => ({
        url: `/task/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["tasks"],
    }),

    // delete task
    deleteATask: builder.mutation({
      query: ({ id }) => ({
        url: `/task/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["tasks"],
    }),

    // update status
    updateTaskStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/task/${id}`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["tasks"],
    }),
  }),
});

export const {
  useGetAllTasksQuery,
  useCreateATaskMutation,
  useUpdateATaskMutation,
  useDeleteATaskMutation,
  useUpdateTaskStatusMutation,
} = tasksApi;
