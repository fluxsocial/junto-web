export default [
  {
    id: '123',
    name: 'JUNTO',
    perspectives: [
      {
        id: '123sdf',
        name: 'Feeds',
        type: 'group',
      },
      {
        id: '45829',
        name: 'Channels',
        type: 'group',
      },
      {
        id: '453633',
        name: 'Classrooms',
        type: 'group',
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
  {
    id: '1234',
    name: 'Holochain',
    perspectives: [
      {
        id: '1234234',
        name: 'main',
        type: 'feed',
      },
      {
        id: '123',
        name: 'home',
        type: 'channel',
      },
      {
        id: '1234',
        name: 'holo-fuel',
        type: 'channel',
      },
      {
        id: '12345',
        name: 'meetups',
        type: 'channel',
      },
    ],
    profileImage: require('@/assets/images/junto_web_placeholder--holochain.png'),
  },
  {
    id: '12345',
    name: 'Soul Tribe',
    perspectives: [
      {
        id: '1234234',
        name: 'main',
        type: 'feed',
      },
      {
        id: '123',
        name: 'home',
        type: 'channel',
      },
      {
        id: '1234',
        name: 'anbu',
        type: 'channel',
      },
    ],
    profileImage: require('@/assets/images/junto_web_placeholder--soul.png'),
  },
  {
    id: '12346',
    name: 'Qigong',
    perspectives: [
      {
        id: '1234234',
        name: 'main',
        type: 'feed',
      },
      {
        id: '123',
        name: 'home',
        type: 'channel',
      },
      {
        id: '12345',
        name: 'qigong',
        type: 'channel',
      },
    ],
    profileImage: require('@/assets/images/junto_web_placeholder--temple.png'),
  },
];
