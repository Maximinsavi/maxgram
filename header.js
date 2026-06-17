document.addEventListener("DOMContentLoaded", function () {

    if (!Parse.User.current()) {
        return;
    }

    var html = `
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<div id="app-header">


<style>

body{
    margin:0;
    padding-top:4.6rem;
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial;
}


/* HEADER */
#app-header{
    position:fixed;
    top:0;
    left:0;

    width:100%;
    height:4.6rem;

    background:white;

    border-bottom:1px solid #e5e5e5;

    display:flex;
    align-items:center;
    justify-content:space-around;

    z-index:2147483647;

    isolation:isolate;

    box-shadow:0 2px 10px rgba(0,0,0,.08);
}


/* PROTECTION CONTRE LES AUTRES ELEMENTS */
#app-header *{
    position:relative;
    z-index:1;
}


/* LINK BUTTON */
#app-header a{

    width:3rem;
    height:3rem;

    display:flex;
    align-items:center;
    justify-content:center;

    border-radius:0.9rem;

    text-decoration:none;

}


/* ACTIVE */
#app-header a.active svg{
    stroke:#1877f2;
    fill:none;
}


#app-header a.active{
    background:#eaf2ff;
}


/* ICON */
#app-header svg{

    width:1.8rem;
    height:1.8rem;

    stroke:#1c1e21;

    transition:.2s;

}


/* TOUCH */
#app-header a:active{
    background:#f0f2f5;
}


</style>




<!-- HOME -->
<a href="/home.html" class="active">

<svg viewBox="0 0 24 24" fill="none">

<path d="M4 10L12 3L20 10V21H14V14H10V21H4V10Z"
stroke-width="2"/>

</svg>

</a>




<!-- SEARCH -->
<a href="/m/search.html">

<svg viewBox="0 0 24 24" fill="none">

<circle cx="11" cy="11" r="7"
stroke-width="2"/>

<path d="M20 20L16 16"
stroke-width="2"/>

</svg>

</a>





<!-- MESSAGES -->
<a href="/m/messages.html">

<svg viewBox="0 0 24 24" fill="none">

<path d="M21 12C21 17 17 20 12 20H3V6H21Z"
stroke-width="2"/>

</svg>

</a>





<!-- NOTIFICATIONS -->
<a href="/m/notifications.html">

<svg viewBox="0 0 24 24" fill="none">

<path d="M18 8C18 4 15 3 12 3C9 3 6 4 6 8C6 15 4 16 4 18H20C20 16 18 15 18 8Z"
stroke-width="2"/>

</svg>

</a>






<!-- MENU -->
<a href="/m/menu.html">

<svg viewBox="0 0 24 24" fill="none">

<path d="M4 7H20M4 12H20M4 17H20"
stroke-width="2"
stroke-linecap="round"/>

</svg>

</a>



</div>
`;

    document.body.insertAdjacentHTML("afterbegin", html);

});