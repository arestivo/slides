function addSearchForm() {
  let div = document.createElement('div');
  div.classList.add('search');
  div.style.zIndex = '9999';

  let link = document.createElement('a');
  link.innerHTML = '<i class="fa fa-search"></i>';
  link.addEventListener('click', toggleSearch);
  document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key == 'f') {
      event.preventDefault();
      openSearch();
      return false;
    }

    if (event.keyCode == 27) {
      closeSearch();
    }

    if (event.key == "F3") {
      if (matches.length == 0) {
        return doSearch(event);
      } else {
        return showNextMatch(event);
      }
    }
  });

  let form = document.createElement('form');
  form.innerHTML = '<input name="search" value="">';

  div.appendChild(form);
  div.appendChild(link);

  form.addEventListener('submit', function(event) {
    if (matches.length == 0) {
      return doSearch(event);
    } else {
      return showNextMatch(event);
    }
  });

  let area = document.querySelector('.remark-slides-area');
  area.insertBefore(div, area.firstchild);

  let scaler = document.querySelector('.remark-visible .remark-slide-scaler');
  let top = (document.body.clientHeight - scaler.getBoundingClientRect().height) / 2 + 20;
  let right = (document.body.clientWidth - scaler.getBoundingClientRect().width) / 2 + 20;
  div.style.top = top + "px";
  div.style.right = right + "px";

  let input = document.querySelector('div.search form input');
  input.addEventListener('focus', function(event) {
    slideshow.pause();
  });
  input.addEventListener('blur', function(event) {
    var context = document.querySelectorAll(".remark-slide");
    var instance = new Mark(context);

    slideshow.resume();
  });
  input.addEventListener('input', function(event) {
    cleanSearch();
  });
}

function cleanSearch() {
  currentMatch = -1;
  matches = [];

  var context = document.querySelectorAll(".remark-slide");
  var instance = new Mark(context);
  instance.unmark();
}

function doSearch(event) {
  event.preventDefault();

  let term = document.querySelector('div.search form input').value;

  cleanSearch();

  var context = document.querySelectorAll(".remark-slide");
  var instance = new Mark(context);

  instance.mark(term, {
    "separateWordSearch": false,
    "each": function(match){
      matches.push(match);
    },
    "done": function(){
      if (matches.length != 0)
        showNextMatch(event);
    }
  });

  return false;
}

function showNextMatch(event) {
  event.preventDefault();

  let oldMatches = document.querySelectorAll('.current-match');
  for (let i = 0; i < oldMatches.length; i++)
      oldMatches[i].classList.remove("current-match");

  let match = matches[++currentMatch];
  if (match == null) {
    currentMatch = -1;
    return showNextMatch(event);
  }
  match.classList.add('current-match');

  while (!match.classList.contains('remark-slide-container')) {
    match = match.parentElement;
  };

  let index = 1;
  while (match.previousElementSibling != null) {
    match = match.previousElementSibling;
    index++;
  };

  slideshow.gotoSlide(index);

  return false;
}

function toggleSearch() {
  let input = document.querySelector('div.search form input');
  if (input.style.opacity == '' || parseInt(input.style.opacity) == '0') {
    openSearch();
  } else {
    closeSearch();
  }
}

function openSearch() {
  let input = document.querySelector('div.search form input');

  input.value = '';
  cleanSearch();

  input.style.opacity = '1';

  input.focus();
}

function closeSearch() {
  let input = document.querySelector('div.search form input');

  input.style.opacity = '0';
  input.blur();

  cleanSearch();
}

let matches = [];
let currentMatch = -1;
window.addEventListener('load', addSearchForm);
