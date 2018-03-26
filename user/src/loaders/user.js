import mockUsers from './mock-data';

// Symbolizes some asynchronous operation
export const getUsers = ids => Promise.resolve(mockUsers.filter(user => ids.includes(user.id)));
