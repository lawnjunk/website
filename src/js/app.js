function index(){
  $('.curses-content').text('hahahha');
  console.log('hahahahhah');
}

function about(){
  $('.curses-content').text('aboutha');
  console.log('aboutahhah');
}

Path.map('/').to(index);
Path.map('#about').to(about);
Path.root('#/slash');
Path.listen();
