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
        const matchedPeople = [
          { id: 1, value: 'aaa' },
          { id: 12, value: 'vvv eewe' },
          { id: 122, value: 'vvv eewe' },
          { id: 132, value: 'extremely long name gooes hererereeereeerereeeererreehererereeereeerereeeererree' },
        ];
        renderList(matchedPeople);
      },
    },
  },
});

window.quill = quill;
quill.root.focus();
