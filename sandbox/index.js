// eslint-disable-next-line import/no-extraneous-dependencies
import Quill from 'quill';
import '../src/quill.mention';


const quill = new Quill('#app', {
  modules: {
    mention: {
      container: document.getElementById('popover'),
      allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
      mentionDenotationChars: ['@'],
      fixMentionsToQuill: true,
      source: (searchTerm, renderList) => {
        const matchedPeople = Array(20).fill(null).map((e, i) => {
          return {
            id: i,
            value: `John Doe ${i}`,
          };
        });
        renderList(matchedPeople);
      },
    },
  },
});

window.quill = quill;
quill.root.focus();
