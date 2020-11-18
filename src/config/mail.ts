interface IMailConfig {
  driver: 'ethereal';
  // driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'jordan@gmail.com',
      name: 'Jordan Oliveira',
    },
  },
} as IMailConfig;
