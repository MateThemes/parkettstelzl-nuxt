<template>
  <header class="tm-header-mobile uk-hidden@m">
    <div data-uk-sticky cls-active="uk-navbar-sticky" sel-target=".uk-navbar-container">
      <div class="uk-navbar-container">
        <div class="uk-container uk-container-expand">
          <nav class="uk-navbar" data-uk-navbar="{&quot;container&quot;:&quot;.tm-header-mobile &gt; [uk-sticky]&quot;}">
            <div class="uk-navbar-left">
              <a data-uk-toggle href="#tm-dialog-mobile" class="uk-navbar-toggle uk-navbar-toggle-animate">
                <div data-uk-navbar-toggle-icon></div>
              </a>
            </div>
            <div class="uk-navbar-center">
              <NuxtLink to="/" class="uk-logo uk-navbar-item " aria-label="Back to home">
                <img alt="Parkett Stelzl - Parkett- und Bodenleger aus München" loading="eager" width="160" height="44.5" src="/img/artparkett-logo.svg">
              </NuxtLink>
            </div>
            <div class="uk-navbar-right">
              <div class="uk-navbar-item">
                <div class="uk-visible@s uk-grid tm-grid-expand uk-grid-column-small uk-grid-row-collapse" data-uk-grid>
                  <div class="uk-grid-item-match uk-flex-middle uk-width-expand uk-visible@s">
                    <div class="uk-panel uk-width-1-1">
                      <div class="uk-visible@s">
                        <ul class="uk-margin-remove-bottom uk-subnav">
                          <li class="el-item">
                            <a class="el-link" href="#">
                              <span data-uk-icon="icon: phone"></span>089 744 95 130
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>

    <div id="tm-dialog-mobile" class="uk-dropbar uk-dropbar-top" data-uk-drop="{&quot;clsDrop&quot;:&quot;uk-dropbar&quot;,&quot;flip&quot;:&quot;false&quot;,&quot;container&quot;:&quot;.tm-header-mobile&quot;,&quot;target-y&quot;:&quot;.tm-header-mobile .uk-navbar-container&quot;,&quot;mode&quot;:&quot;click&quot;,&quot;target-x&quot;:&quot;.tm-header-mobile .uk-navbar-container&quot;,&quot;stretch&quot;:true,&quot;bgScroll&quot;:&quot;false&quot;,&quot;animation&quot;:&quot;reveal-top&quot;,&quot;animateOut&quot;:true,&quot;duration&quot;:300,&quot;toggle&quot;:&quot;false&quot;}">
            <div class="tm-height-min-1-1 uk-flex uk-flex-column">
                <div class="uk-margin-auto-bottom">
                    <div class="uk-grid uk-child-width-1-1">
                        <div>
                            <div class="uk-panel">
                                <ul class="uk-nav uk-nav-default uk-nav-divider uk-nav-accordion" data-uk-nav="targets: &gt; .js-accordion">
                                    <li class="uk-active">
                                      <NuxtLink to="/">Home</NuxtLink>
                                    </li>
                                    <li class="js-accordion uk-parent">
                                        <a href="#">Leistungen <span data-uk-nav-parent-icon></span></a>
                                        <ul class="uk-nav-sub">
                                            <li>
                                                <a href="#">Fußboden verlegen vom Fachmann</a>
                                            </li>
                                            <li>
                                                <a href="#">Parkett schleifen und renovieren</a>
                                            </li>
                                            <li>
                                                <a href="#">Treppenrenovierung</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li >
                                        <a href="https://parkettstelzloc:8890/wir-ueber-uns">Wir über uns</a>
                                    </li>
                                    <li >
                                        <a href="https://parkettstelzloc:8890/unsere-ausstellung-in-muenchen-forstenried">Unsere Ausstellung</a>
                                    </li>
                                    <li class="js-accordion uk-parent">
                                        <a href="#"> Company <span data-uk-nav-parent-icon></span></a>
                                        <ul class="uk-nav-sub">
                                            <li class="">
                                                <a href="https://demo.yootheme.com/wordpress/themes/devstack.light-orange/?page_id=4"> About</a>
                                            </li>
                                            <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                                <a href="https://demo.yootheme.com/wordpress/themes/devstack.light-orange/?page_id=23"> Our Story</a>
                                            </li>
                                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy">
                                                <a href="https://demo.yootheme.com/wordpress/themes/devstack.light-orange/?page_id=3"> Careers</a>
                                            </li>
                                            <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                                <a href="https://demo.yootheme.com/wordpress/themes/devstack.light-orange/?page_id=65"> Blog</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="uk-grid-margin">
                    <div class="uk-grid uk-child-width-1-1">
                        <div>
                            <div class="uk-panel">
                                <div class="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
                                    <div class="uk-width-1-1">
                                        <div class="uk-margin">
                                            <a class="el-content uk-width-1-1 uk-button uk-button-primary uk-button-large" href="#" data-uk-scroll>Register</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
                                    <div class="uk-width-1-1">
                                        <div class="uk-text-center">
                                            <ul class="uk-margin-remove-bottom uk-subnav  uk-subnav-divider uk-flex-center" data-uk-margin>
                                              <li class="el-item">
                                                <NuxtLink to="/impressum" class="el-link" data-uk-toggle="#tm-dialog-mobile">Impressum</NuxtLink>
                                              </li>
                                              <li class="el-item">
                                                <NuxtLink to="/datenschutz" class="el-link" data-uk-toggle="#tm-dialog-mobile">Datenschutz</NuxtLink>
                                              </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script setup lang="ts">
</script>
