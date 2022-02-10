export const state = () => ({
  users: [
    {
      name: 'user 1',
      id: 1,
    },
    {
      name: 'user 2',
      id: 2,
    },
    {
      name: 'user 3',
      id: 3,
    },
  ],
})

export const getters = {
  getUsers: (state) => state.users,
}
