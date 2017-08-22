// addaptive navbar
( function() {
    var nav = document.getElementById( 'navbar-main-1' ), button, menu;
    if ( ! nav ) {
        return;
    }

    // button = nav.getElementsByTagName( 'div' )[0];
    button = document.getElementById( 'menu-btn' );
    // header = document.getElementById( 'navbar-header-2' );
    buttonclose = document.getElementById ( 'menu-btn-close');
    menu   = nav.getElementsByTagName( 'ul' )[0];
    if ( ! button ) {
        return;
    }

    // Hide button if menu is missing or empty.
    if ( ! menu || ! menu.childNodes.length ) {
        button.style.display = 'none';
        return;
    }
    buttonclose.onclick = function () {
        if ( -1 !== buttonclose.className.indexOf( 'toggled-on' ) ) {
            button.className = button.className.replace( ' toggled-on', '' );
            buttonclose.className = buttonclose.className.replace( ' toggled-on', '' );
            menu.className = menu.className.replace( ' toggled-on', '' );
            // header.className = header.className.replace( ' toggled-on', '' );
        } else {
            button.className += ' toggled-on';
            buttonclose.className += ' toggled-on';
            menu.className += ' toggled-on';
            // header.className += ' toggled-on';
        }
    };
    button.onclick = function() {
        if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
            menu.className = 'nav-menu';
        }

        if ( -1 !== button.className.indexOf( 'toggled-on' ) ) {
            button.className = button.className.replace( ' toggled-on', '' );
            buttonclose.className = buttonclose.className.replace( ' toggled-on', '' );
            menu.className = menu.className.replace( ' toggled-on', '' );
            // header.className = header.className.replace( ' toggled-on', '' );
        } else {
            button.className += ' toggled-on';
            buttonclose.className += ' toggled-on';
            menu.className += ' toggled-on';
            // header.className += ' toggled-on';
        }
    };
} )();