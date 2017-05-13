var app = a = {};
a.elements = e = {};
a.listeners = l = {};
a.handlers = h = {};
a.utilities = u = {};
a.state = s = {};

e.body, e.amazon, e.ebay = undefined;

s.color = 'black';
s.bgColor = 'bgwhite';

s.links = {
  'amazon' : [
    [
      'Kindle Paperwhite',
    'https://www.amazon.com/gp/product/B00OQVZDJM/ref=as_li_tl?ie=UTF8&tag=letsplaysoftw-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00OQVZDJM&linkId=38dd6d8e6c27e085e0c1479b2dd9899d'
    ],
    [
      'Kindle Oasis',
      'https://www.amazon.com/gp/product/B00REQKWGA/ref=as_li_tl?ie=UTF8&tag=letsplaysoftw-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00REQKWGA&linkId=60a28a486994ec3d4c4faca445df221c'
    ],
    [
      'Kindle',
      'https://www.amazon.com/gp/product/B00ZV9PXP2/ref=as_li_tl?ie=UTF8&tag=letsplaysoftw-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00ZV9PXP2&linkId=437e44789edde1f4be54cc8f38db460b'
    ]
  ],
  'ebay': [
    ''
  ]
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('hello github');

  e.body = document.getElementById('body');
  e.amazon = document.getElementById('amazon');
  e.ebay = document.getElementById('ebay');

  var aa = s.links.amazon[
    Math.floor(Math.random() * s.links.amazon.length)
  ];
  e.amazon.innerText = aa[0];
  e.amazon.href = aa[1];

  document.addEventListener('keypress', l.onKeyPress);
});

l.onKeyPress = function(event) {
  if ('qwerasdf'.includes(event.key)) {
    e.body.classList.remove(s.color);
    switch (event.key) {
      case 'q':
        s.color = 'pink'; break;
      case 'w':
        s.color = 'blue'; break;
      case 'e':
        s.color = 'purple'; break;
      case 'r':
        s.color = 'orange'; break;
      case 'a':
        s.color = 'white'; break;
      case 's':
        s.color = 'black'; break;
      case 'd':
        s.color = 'green'; break;
      case 'f':
        s.color = 'yellow'; break;
    }
    e.body.classList.add(s.color);
  } else if ('uiopjkl;'.includes(event.key)) {
    e.body.classList.remove(s.bgColor);
    switch (event.key) {
      case 'u':
        s.bgColor = 'bgpink'; break;
      case 'i':
        s.bgColor = 'bgblue'; break;
      case 'o':
        s.bgColor = 'bgpurple'; break;
      case 'p':
        s.bgColor = 'bgorange'; break;
      case 'j':
        s.bgColor = 'bgwhite'; break;
      case 'k':
        s.bgColor = 'bgblack'; break;
      case 'l':
        s.bgColor = 'bggreen'; break;
      case ';':
        s.bgColor = 'bgyellow'; break;
    }
    e.body.classList.add(s.bgColor);
  }
}
