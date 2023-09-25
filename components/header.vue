<template>
    <header>
        <div class="tm-header uk-visible@m" data-uk-header>
            <div class="tm-headerbar-default tm-headerbar tm-headerbar-top">
                <div class="uk-container uk-container-large uk-flex uk-flex-middle">
                    <NuxtLink to="/">
                        <img src="https://parkettstelzloc:8890/themes/matethemes-parkettstelzlnew/assets/images/artparkett-logo.svg" alt="Parkett Stelzl - Parkett- und Bodenleger aus München" width="220" height="61" data-uk-img>
                    </NuxtLink>
                    <div class="uk-margin-auto-left">
                        <div class="uk-grid-medium uk-child-width-auto uk-flex-middle" data-uk-grid>
                            <div>
                                <div class="uk-panel">
                                    <div class="uk-margin-remove-last-child">
                                        <ul class="uk-subnav uk-subnav-divider">
                                            <li data-uk-tooltip="title: In unserem Büro anrufen; pos: bottom">
                                                <a href="tel:0049896892177">
                                                    <span data-uk-icon="icon: phone"></span>
                                                    <span style="font-size: 12px;">Büro: <br>089 689 21 77</span>
                                                </a>
                                            </li>
                                            <li data-uk-tooltip="title: In unserer Ausstellung anrufen; pos: bottom">
                                                <a href="tel:00498974495130">
                                                    <span data-uk-icon="icon: phone"></span>
                                                    <span style="font-size: 12px;">Ausstellung: <br>089 744 95 130</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-uk-sticky="media: @m; cls-active: uk-navbar-sticky; sel-target: .uk-navbar-container;">
                <div class="uk-navbar-container">
                    <div class="uk-container uk-container-large uk-flex uk-flex-middle">
                        <nav class="uk-navbar uk-flex-auto" data-uk-navbar="align: left; boundary: .tm-header . uk-navbar-container; container: .tm-header > [uk-sticky]; mode: click;">
                            <div class="uk-navbar-left uk-flex-auto">
                                <ul class="uk-navbar-nav">
                                    <div class='uk-navbar-center uk-visible@m'>
                                        <ul class='uk-navbar-nav'>
                                            <li>
                                                <a href='/'>Home</a>
                                            </li>
                                            <li>
                                                <a href='#'>Unsere Leistungen <span uk-navbar-parent-icon></span></a>
                                                <div class='uk-navbar-dropdown'>
                                                    <ul class='uk-nav uk-navbar-dropdown-nav'>
                                                        <li><a href='/fussboden-verlegen-vom-fachmann/'>Fussboden verlegen vom Fachmann</a></li>
                                                        <li><a href='/parkett-schleifen-und-renovieren/'>Parkett schleifen und renovieren</a></li>
                                                        <li><a href='/treppenrenovierung/'>Treppenrenovierung</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li >
                                                <a href="https://parkettstelzloc:8890/wir-ueber-uns">Wir über uns</a>
                                            </li>
                                            <li >
                                                <a href=https://parkettstelzloc:8890/unsere-ausstellung-in-muenchen-forstenried>Ausstellung</a>
                                            </li>
                                            <li >
                                                <a href="https://parkettstelzloc:8890/galerie">Galerie</a>
                                            </li>
                                            <li><a href='/kontaktieren-sie-uns/'>Kontakt</a></li>
                                        </ul>
                                    </div>
                                </ul>
                                <div class="uk-margin-auto-left uk-navbar-item">
                                    <div class="uk-margin-remove-last-child custom">
                                        <a href="/kontaktieren-sie-uns/" class="uk-button uk-button-primary">Anfrage stellen</a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>