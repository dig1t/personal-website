import React from 'react'
import Navigation from './Navigation'

export class Burger extends React.Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
  }
  
  toggle() {
    this.setState({open: !this.state.open})
  }
  
	render() {
    return <ui className={"nav-toggle hamburger " + (this.state.open ? 'active' : '')} onClick={this.toggle}><i /></ui>;
  }
}

export class Modal extends React.Component {
	constructor() {
    super()
    this.state = {
      open: false
    }
  }
	
	getModal() {
		return <div className="modal">
			<div className="align">
				<div className="background-close" />
				<div className="container">
					<button className="close" />
					<div className="main">
						<div className="header" />
						<div className="content">{this.props.children}</div>
					</div>
				</div>
			</div>
		</div>;
	}
	
	reset() {
		
	}
  
  toggle() {
    this.setState({open: !this.state.open})
  }
  
	render() {
    return <ui className={"nav-toggle hamburger " + (this.state.open ? 'active' : '')} onClick={this.toggle}><i /></ui>;
  }
}

/*
function __() {
	
}

__.modal = function() {
  
};

var modal = {
  align: __('<div class="align">'),
  closeButton: __('<button class="fa fa-close close">'),
  closeToggle: __('<div class="background-close">'),
  container: __('<div class="container">'),
  content: __('<div class="content">'),
  header: __('<div class="header">').hide(),
  main: __('<div class="main">'),
  modal: __('<div class="modal">')
};

modal.modal.append(modal.align); 2
modal.align.append(modal.closeToggle); 3
modal.align.append(modal.container); 3
modal.container.append(modal.closeButton); 4
modal.container.append(modal.main); 4
modal.main.append(modal.header);
modal.main.append(modal.content);
__('body').append(modal.modal); 1

__.modal.reset = function() {
  modal.content.attr('class', 'content'); // remove modal classes
  modal.content.clearChildren();
  modal.header.hide();
  modal.header.text('');
};

__.modal.close = function(e) {
  if (e && e.preventDefault) e.preventDefault();
  modal.modal.removeClass('open');
  __.modal.reset();
};

modal.closeButton.click(__.modal.close);
modal.closeToggle.click(__.modal.close);

__.modal.keypress = function(e) {
  e = e || window.event;
  if (e.keyCode === 27) __.modal.close();
};

__.modal.add = function(name, className, f) {
  __.modal[name] = function() {
    f.apply(__.modal, arguments);
    modal.modal.addClass('open');
    modal.content.addClass(className);
    document.addEventListener('keydown', this.keypress);
  };
};

__.modal.add('alert', 'alert', function(text, callback) {
  var alertText = __('<div class="alert">'),
    ok = __('<button class="submit">').text('OK');
  
  modal.header.text('Alert');
  modal.header.show();
  alertText.text(text);
  modal.content.append(alertText);
  modal.content.append(ok);
  
  ok.click(function(e) {
    e.preventDefault();
    __.modal.close();
    if (callback) callback(e);
  });
});

__.modal.add('image', 'image', function(source, header) {
  if (header) {
    header.show();
    modal.header.text(header);
  }
  
  var image = __('<img class="image">').attr('src', source);
  
  modal.content.append(image);
});

__.each(__.modal, function(v, k) {
  __.modal[k] = v;
});*/