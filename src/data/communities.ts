const myPerspectives = {
  1234123: {
    id: '123',
    name: 'JUNTO',
    private: false,
    type: 'channel',
    invited: ['dora', 'josh'],
  },
  23434543: {
    id: '234',
    name: 'Top level channel without group',
    type: 'channel',
    parentId: '123',
    private: false,
    invited: ['eric', 'josh'],
  },
};

const perspectives = [
  {
    id: '123',
    name: 'JUNTO',
    private: false,
    type: 'group',
    invited: ['dora', 'josh'],
  },
  {
    id: '234',
    name: 'Top level channel without group',
    type: 'channel',
    parentId: '123',
    private: false,
    invited: ['eric', 'josh'],
  },
  {
    id: '345',
    name: 'A group',
    type: 'group',
    parentId: '123',
    private: true,
    invited: ['leif', 'eric'],
  },
  {
    id: '456',
    name: 'Channel inside group',
    type: 'channel',
    parentId: '345',
    private: false,
    invited: ['leif', 'eric'],
  },
  {
    id: '567',
    name: 'Feed inside group',
    type: 'feed',
    parentId: '345',
    private: true,
    invited: ['dora'],
  },
];

export default [
  {
    id: '123',
    name: 'JUNTO',
    perspectives: [
      {
        id: 'sdkfjkl3j4',
        name: 'Top level channel',
        type: 'channel',
        parentId: '123',
      },
      {
        id: 'slkdjflkj2345',
        name: 'Top level feed',
        type: 'feed',
        parentId: '123',
      },
      {
        id: '123sdf',
        name: 'Feeds',
        type: 'group',
        parentId: '123',
      },
      {
        id: '45829',
        name: 'Channels',
        type: 'group',
        parentId: '123',
      },
      {
        id: '453633',
        name: 'Classrooms',
        type: 'group',
        parentId: '123',
      },
      {
        id: '1234234',
        name: 'main',
        type: 'feed',
        parentId: '123sdf',
      },
      {
        id: '123',
        name: 'home',
        type: 'channel',
        parentId: '45829',
      },
      {
        id: '1234',
        name: 'inspiration',
        type: 'channel',
        parentId: '45829',
      },
      {
        id: '12345',
        name: 'maths',
        type: 'channel',
        parentId: '453633',
      },
    ],
    profileImage: require('@/assets/images/junto_app_icon.png'),
  },
];
