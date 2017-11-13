const axios = require('axios');
const debug = require('debug')('slash-command-template:ticket');
const qs = require('querystring');
const users = require('./users');

/*
 *  Send ticket creation confirmation via
 *  chat.postMessage to the user who created it
 */
const sendConfirmation = (ticket) => {
axios.post('https://hooks.zapier.com/hooks/catch/404051/s6bhfg/', qs.stringify({
      'Fellow': ticket.fellow,
      'Email': ticket.email,
      'Submitter': ticket.userId,
      'Company': ticket.company,
      'Partner': ticket.partner,
      'Budget': ticket.budget,
      'Date': Date.now(),
  })).then((result) => {
    debug('sendConfirmation: %o', result.data);
  }).catch((err) => {
    debug('sendConfirmation error: %o', err);
    console.error(err);
  });

  axios.post('https://slack.com/api/chat.postMessage', qs.stringify({
    token: process.env.SLACK_ACCESS_TOKEN,
    channel: ticket.userId,
    text: `Submitting Feedback for ${ticket.fellow}`,
    attachments: JSON.stringify([
      {
      text: ticket.text,
      fallback: 'Pre-filled because you have actions in your attachment.',
      color: '#db1017',
      text: 'The ability to deliver work output that meets or exceeds expected standards of functionality, performance, reliability and maintainability.',
      mrkdwn_in: [
        'text',
        'pretext',
        'fields'
      ],
      callback_id: 'Pre-filled because you have actions in your attachment.',
      attachment_type: 'default',
      title: 'Work Quality',
      actions: [
        
        {
          name: 'Work Quality',
          text: 'Work Quality',
          type: 'select',
          value: 'quality',
          data_source: 'static',
          options: [
            {
              text: '+2  Very Satisfied :green_heart: :green_heart: ',
              value: '+2  Very Satisfied :green_heart: :green_heart: '
            },
            {
              text: '+1  Satisfied :green_heart: ',
              value: '+1  Satisfied :green_heart: '
            },
            {
              text: '0 Neutral :yellow_heart: ',
              value: '0 Neutral :yellow_heart: '
            },
            {
              text: '-1  Unsatisfied :broken_heart: ',
              value: '-1  Unsatisfied :broken_heart: '
            },
            {
              text: '-2 Very Unsatisfied :broken_heart: :broken_heart:',
              value: '-2 Very Unsatisfied :broken_heart: :broken_heart:'
            }
          ]
        }
      ]
    },
       {
      text: ticket.text,
      fallback: 'Pre-filled because you have actions in your attachment.',
      color: '#ff8000',
      text: 'The ability to consistently deliver work output of sufficient quality at or above the expected pace.',
      mrkdwn_in: [
        'text',
        'pretext',
        'fields'
      ],
      callback_id: 'Pre-filled because you have actions in your attachment.',
      attachment_type: 'default',
      title: 'Work Quantity',
      actions: [
        {
          name: 'Work Quantity',
          text: 'Work Quantity',
          type: 'select',
          value: 'quantity',
          data_source: 'static',
          options: [
            {
              text: '+2  Very Satisfied :green_heart: :green_heart: ',
              value: '+2  Very Satisfied :green_heart: :green_heart: '
            },
            {
              text: '+1  Satisfied :green_heart: ',
              value: '+1  Satisfied :green_heart: '
            },
            {
              text: '0 Neutral :yellow_heart: ',
              value: '0 Neutral :yellow_heart: '
            },
            {
              text: '-1  Unsatisfied :broken_heart: ',
              value: '-1  Unsatisfied :broken_heart: '
            },
            {
              text: '-2 Very Unsatisfied :broken_heart: :broken_heart:',
              value: '-2 Very Unsatisfied :broken_heart: :broken_heart:'
            }
          ]
        }
      ]
    },
       {
      text: ticket.text,
      fallback: 'Pre-filled because you have actions in your attachment.',
      color: '#FFE700',
      text: 'The ability to identify high value targets for individual, team or organizational improvement and proactively prioritize and communicate them.',
      mrkdwn_in: [
        'text',
        'pretext',
        'fields'
      ],
      callback_id: 'Pre-filled because you have actions in your attachment.',
      attachment_type: 'default',
      title: 'Work Initiative',
      actions: [
        {
          name: 'Work Initiative',
          text: 'Work Initiative',
          type: 'select',
          value: 'initiative',
          data_source: 'static',
          options: [
            {
              text: '+2  Very Satisfied :green_heart: :green_heart: ',
              value: '+2  Very Satisfied :green_heart: :green_heart: '
            },
            {
              text: '+1  Satisfied :green_heart: ',
              value: '+1  Satisfied :green_heart: '
            },
            {
              text: '0 Neutral :yellow_heart: ',
              value: '0 Neutral :yellow_heart: '
            },
            {
              text: '-1  Unsatisfied :broken_heart: ',
              value: '-1  Unsatisfied :broken_heart: '
            },
            {
              text: '-2 Very Unsatisfied :broken_heart: :broken_heart:',
              value: '-2 Very Unsatisfied :broken_heart: :broken_heart:'
            }
          ]
        }
      ]
      
    },
       {
      text: ticket.text,
      fallback: 'Pre-filled because you have actions in your attachment.',
      color: '#40BC46',
      text: 'The ability to understand and make oneself understood via both written and verbal communication. The knowledge to use communications mediums effectively and appropriately. ',
      mrkdwn_in: [
        'text',
        'pretext',
        'fields'
      ],
      callback_id: 'Pre-filled because you have actions in your attachment.',
      attachment_type: 'default',
      title: 'Team Communication',
      actions: [
        {
          name: 'Team Communication',
          text: 'Team Communication',
          type: 'select',
          value: 'Communication',
          data_source: 'static',
          options: [
            {
              text: '+2  Very Satisfied :green_heart: :green_heart: ',
              value: '+2  Very Satisfied :green_heart: :green_heart: '
            },
            {
              text: '+1  Satisfied :green_heart: ',
              value: '+1  Satisfied :green_heart: '
            },
            {
              text: '0 Neutral :yellow_heart: ',
              value: '0 Neutral :yellow_heart: '
            },
            {
              text: '-1  Unsatisfied :broken_heart: ',
              value: '-1  Unsatisfied :broken_heart: '
            },
            {
              text: '-2 Very Unsatisfied :broken_heart: :broken_heart:',
              value: '-2 Very Unsatisfied :broken_heart: :broken_heart:'
            }
          ]
        }
      ]
    },
      {
      text: ticket.text,
      fallback: 'Pre-filled because you have actions in your attachment.',
      color: '#297AD4',
      text: 'The ability to act, react and communicate in a manner that demonstrates respect for coworkers, an understanding of the team\'s goals and acceptance of the organization\'s mission.',
      mrkdwn_in: [
        'text',
        'pretext',
        'fields'
      ],
      callback_id: 'Pre-filled because you have actions in your attachment.',
      attachment_type: 'default',
      title: 'Team Professionalism',
      actions: [
        {
          name: 'Team Professionalism',
          text: 'Team Professionalism',
          type: 'select',
          value: 'professionalism',
          data_source: 'static',
          options: [
            {
              text: '+2  Very Satisfied :green_heart: :green_heart: ',
              value: '+2  Very Satisfied :green_heart: :green_heart: '
            },
            {
              text: '+1  Satisfied :green_heart: ',
              value: '+1  Satisfied :green_heart: '
            },
            {
              text: '0 Neutral :yellow_heart: ',
              value: '0 Neutral :yellow_heart: '
            },
            {
              text: '-1  Unsatisfied :broken_heart: ',
              value: '-1  Unsatisfied :broken_heart: '
            },
            {
              text: '-2 Very Unsatisfied :broken_heart: :broken_heart:',
              value: '-2 Very Unsatisfied :broken_heart: :broken_heart:'
            }
          ]
        }
      ]
    },
       {
      text: ticket.text,
      fallback: 'Pre-filled because you have actions in your attachment.',
      color: '#660FAA',
      text: 'TThe ability to embed oneself as a compatible, vital member of a team and an organization at large. The ability to absorb and reflect a team\'s values.',
      mrkdwn_in: [
        'text',
        'pretext',
        'fields'
      ],
      callback_id: 'Pre-filled because you have actions in your attachment.',
      attachment_type: 'default',
      title: 'Team Integration',
      actions: [
        {
          name: 'Team Integration',
          text: 'Team Integration',
          type: 'select',
          value: 'integration',
          data_source: 'static',
          options: [
            {
              text: '+2  Very Satisfied :green_heart: :green_heart: ',
              value: '+2  Very Satisfied :green_heart: :green_heart: '
            },
            {
              text: '+1  Satisfied :green_heart: ',
              value: '+1  Satisfied :green_heart: '
            },
            {
              text: '0 Neutral :yellow_heart: ',
              value: '0 Neutral :yellow_heart: '
            },
            {
              text: '-1  Unsatisfied :broken_heart: ',
              value: '-1  Unsatisfied :broken_heart: '
            },
            {
               text: '-2 Very Unsatisfied :broken_heart: :broken_heart:',
              value: '-2 Very Unsatisfied :broken_heart: :broken_heart:'
            }
          ]
        }
      ]
    },
    ]),
  })).then((result) => {
    debug('sendConfirmation: %o', result.data);
  }).catch((err) => {
    debug('sendConfirmation error: %o', err);
    console.error(err);
  });

  // post to channel
axios.post('https://slack.com/api/chat.postMessage', qs.stringify({
    token: process.env.SLACK_ACCESS_TOKEN,
    channel: '#fellow-feedback',
    text: `Feedback for ${ticket.fellow} has been added by ${ticket.userEmail}`,
    attachments: JSON.stringify([
      {
        //title: `Feedback for ${ticket.fellow} has been added by ${ticket.userEmail}`,
        // Get this from the 3rd party helpdesk system
        text: ticket.text,
        fields: [
          {
          title: 'Fellow name:',
          value: ticket.fellow,
          'short': true
        },
        {
          title: 'Partner:',
          value: ticket.company,
          'short': true
        },
        {
          title: 'Date submitted',
          value: Date.now(),
          'short': true
        },
        {
          title: 'Work Quality',
          value: ticket.quality,
          'short': true
        },
        {
          title: 'Work Quanitity',
          value: ticket.quantity,
          'short': true
        },
        ],
      },
    ]),
  })).then((result) => {
    debug('sendConfirmation: %o', result.data);
  }).catch((err) => {
    debug('sendConfirmation error: %o', err);
    console.error(err); 
});
 
};
// Create helpdesk ticket. Call users.find to get the user's email address
// from their user ID
const create = (userId, submission) => {
  const ticket = {};

  const fetchUserEmail = new Promise((resolve, reject) => {
    users.find(userId).then((result) => {
      debug(`Find user: ${userId}`);
      resolve(result.data.user.profile.email);
    }).catch((err) => { reject(err); });
  });

  fetchUserEmail.then((result) => {
    ticket.userId = userId;
    ticket.userEmail = result;
    ticket.fellow = submission.fellow;
    ticket.email = submission.email;
    ticket.company = submission.company;
    ticket.quantity = submission.quantity;
    ticket.quality = submission.quality;
    sendConfirmation(ticket);

    return ticket;
  }).catch((err) => { console.error(err); });
};

module.exports = { create, sendConfirmation };