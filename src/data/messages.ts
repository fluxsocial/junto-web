export interface ChatMessage {
  id: number;
  username: string;
  profileImage: string;
  type: 'text' | 'image' | 'video';
  message: string;
  timestamp: Date;
}

export const messages: Array<ChatMessage> = [
  {
    id: 0,
    username: 'eric',
    profileImage: require('@/assets/images/eric.png'),
    type: 'text',
    message: 'yo!',
    timestamp: new Date(Date.UTC(2021, 3, 20, 10, 20, 30)),
  },
  {
    id: 1,
    username: 'eric',
    profileImage: require('@/assets/images/eric.png'),
    type: 'text',
    message: 'Inviting everyone in now!',
    timestamp: new Date(Date.UTC(2021, 3, 20, 10, 20, 30)),
  },
  {
    id: 0,
    username: 'eric',
    profileImage: require('@/assets/images/eric.png'),
    type: 'text',
    message: 'Hey everyone!',
    timestamp: new Date(Date.UTC(2021, 3, 21, 10, 20, 30)),
  },
  {
    id: 1,
    username: 'eric',
    profileImage: require('@/assets/images/eric.png'),
    type: 'text',
    message:
      'Welcome to the Holochain group on Junto. All of this is fully decentralized and powered by this exciting new framework :)',
    timestamp: new Date(Date.UTC(2021, 3, 21, 10, 20, 30)),
  },
  {
    id: 2,
    username: 'eric',
    profileImage: require('@/assets/images/eric.png'),
    type: 'text',
    message: 'The MVP will feature private group messaging.',
    timestamp: new Date(Date.UTC(2021, 3, 21, 10, 20, 30)),
  },
  {
    id: 2,
    username: 'eric',
    profileImage: require('@/assets/images/eric.png'),
    type: 'text',
    message:
      "You'll also be able to create channels (sub-conversations) to organize your discussions into topics. Give it a go!",
    timestamp: new Date(Date.UTC(2021, 3, 21, 10, 20, 30)),
  },

  {
    id: 2,
    username: 'josh',
    profileImage: require('@/assets/images/josh.png'),
    type: 'text',
    message: 'Should have this ready for release by Summer 2021!',
    timestamp: new Date(Date.UTC(2021, 3, 21, 10, 25, 30)),
  },
  {
    id: 2,
    username: 'josh',
    profileImage: require('@/assets/images/josh.png'),
    type: 'text',
    message:
      "Feel free to check out the AD4M framework we've been developing this platform with as well",
    timestamp: new Date(Date.UTC(2021, 3, 21, 10, 25, 30)),
  },
  {
    id: 2,
    username: 'josh',
    profileImage: require('@/assets/images/josh.png'),
    type: 'text',
    message:
      'AD4M is a meta-ontology designed to create more interopability between user interfaces.',
    timestamp: new Date(Date.UTC(2021, 3, 21, 10, 25, 30)),
  },
  {
    id: 2,
    username: 'josh',
    profileImage: require('@/assets/images/josh.png'),
    type: 'text',
    message:
      'You can read more about it on the documentation hosted at our Github here: https://ad4m.dev',
    timestamp: new Date(Date.UTC(2021, 3, 21, 10, 25, 30)),
  },
  {
    id: 2,
    username: 'dora',
    profileImage: require('@/assets/images/dora.png'),
    type: 'text',
    message: 'This is exciting!!',
    timestamp: new Date(Date.UTC(2021, 3, 22, 11, 15, 30)),
  },
  {
    id: 2,
    username: 'dora',
    profileImage: require('@/assets/images/dora.png'),
    type: 'text',
    message: "Let's start using this is our team communication platform too.",
    timestamp: new Date(Date.UTC(2021, 3, 22, 11, 15, 30)),
  },
  {
    id: 2,
    username: 'eric',
    profileImage: require('@/assets/images/eric.png'),
    type: 'text',
    message: 'Great idea. ',
    timestamp: new Date(Date.UTC(2021, 3, 22, 11, 25, 30)),
  },
  {
    id: 2,
    username: 'eric',
    profileImage: require('@/assets/images/eric.png'),
    type: 'text',
    message:
      "Eventally, we'll build this out so communities can have not only a newsfeed and "
      + 'organized group messaging, but a place to host all their documentation as well.',
    timestamp: new Date(Date.UTC(2021, 3, 22, 11, 25, 30)),
  },
  {
    id: 2,
    username: 'eric',
    profileImage: require('@/assets/images/eric.png'),
    type: 'text',
    message:
      'Each feed, channel, and view is its own Holochain DNA so it allows for full customizability, '
      + 'extensibility, and various levels of permissions too.',
    timestamp: new Date(Date.UTC(2021, 3, 22, 11, 25, 30)),
  },
  {
    id: 2,
    username: 'eric',
    profileImage: require('@/assets/images/eric.png'),
    type: 'text',
    message:
      'Basically a service where you have all the features of Slack and Notion, '
      + 'all powered by the agent-centric and privacy benefits of Holochain.',
    timestamp: new Date(Date.UTC(2021, 3, 22, 11, 25, 30)),
  },
];

export default messages;
