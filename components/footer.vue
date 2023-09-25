<template>
    <div class="uk-section-default uk-section uk-section-large">
        <div class="uk-container uk-container-large">
            <div class="uk-grid tm-grid-expand uk-grid-large uk-grid-margin-large" data-uk-grid>
                <div class="uk-width-1-3@m">
                    <h2 class="uk-h4 uk-margin uk-width-medium@m uk-text-left@m uk-text-center">Um Angebote und Neuigkeiten zu erhalten, schreiben Sie sich in unseren Newsletter ein!</h2>
                    <div class="uk-margin-medium uk-text-left@m uk-text-center">
                        <form class="uk-form uk-panel js-form-newsletter" method="post" action="https://demo.yootheme.com/wordpress/themes/district/wp-admin/admin-ajax.php?action=kernel&amp;p=theme%2Fnewsletter%2Fsubscribe&amp;hash=82dda1f0">
                            <div class="uk-position-relative">
                                <button class="el-button uk-form-icon uk-form-icon-flip" data-uk-icon="icon: arrow-right;" title="Subscribe"></button>
                                <input class="el-input uk-input" type="email" name="email" placeholder="E-Mail Adresse" aria-label="Email Address" required>
                            </div>
                            <input type="hidden" name="settings" value="eyJuYW1lIjoibWFpbGNoaW1wIiwiYWZ0ZXJfc3VibWl0IjoibWVzc2FnZSIsIm1lc3NhZ2UiOiJZb3UndmUgYmVlbiBzdWJzY3JpYmVkIHN1Y2Nlc3NmdWxseS4iLCJyZWRpcmVjdCI6IiIsImNsaWVudF9pZCI6IiIsImxpc3RfaWQiOiIiLCJkb3VibGVfb3B0aW4iOnRydWV9">
                            <div class="message uk-margin uk-hidden"></div>
                        </form>
                    </div>
                </div>
                <div class="uk-width-2-3@m">
                    <h2 class="uk-h4 uk-margin-large uk-text-left@m uk-text-center">Wo Sie uns finden</h2>
                    <div class="uk-margin uk-text-left@m uk-text-center">
                        <div class="uk-grid uk-child-width-1-1 uk-child-width-1-2@s uk-grid-large uk-grid-divider uk-grid-match" data-uk-grid>
                            <div>
                                <div class="el-item uk-panel uk-margin-remove-first-child">
                                    <h3 class="el-title uk-h4 uk-margin-top uk-margin-remove-bottom">Ausstellung</h3>
                                                                    <div class="el-content uk-panel uk-margin-top">Forstenrieder Allee 195, 81476 München</div>
                                    <div class="el-content uk-panel uk-margin-small-top">
                                        <ul class="uk-list uk-list-collapse">
                                            <li>Telefon: 089 744 95 130</li>
                                            <li>Fax: 089 744 95 137</li>
                                        </ul>
                                    </div>
                                                                    <h3 class="el-title uk-h5 uk-margin-top uk-margin-remove-bottom">Öffnungszeiten</h3>
                                    <div class="el-content uk-panel uk-margin-small-top">
                                                                            <ul class="uk-list uk-list-collapse">
                                                                                    <li>Mo., Mi., Fr.: 13:00 - 18:00 Uhr</li>
                                                                                    <li>Di., Do.: Geschlossen</li>
                                                                                    <li>Sa.: 10:00 - 14:00 Uhr</li>
                                                                                </ul>
                                                                        </div>
                                    <p><strong>Um für Sie Wartezeiten zu vermeiden und um unsere Termine besser planen zu können, bitten wir um eine Terminvereinbarung unter 089- 689 21 77!</strong></p>
                                </div>
                            </div>
                            <div>
                                <div class="el-item uk-panel uk-margin-remove-first-child">
                                    <h3 class="el-title uk-h4 uk-margin-top uk-margin-remove-bottom">Büro</h3>
                                                                    <div class="el-content uk-panel uk-margin-top">Görzer Straße 144, 81549 München</div>
                                    <div class="el-content uk-panel uk-margin-small-top">
                                        <ul class="uk-list uk-list-collapse">
                                            <li>Telefon: 089 689 21 77</li>
                                            <li>Fax: 089 689 21 78</li>
                                        </ul>
                                    </div>
                                                                    <h3 class="el-title uk-h5 uk-margin-top uk-margin-remove-bottom">Öffnungszeiten</h3>
                                    <div class="el-content uk-panel uk-margin-small-top">
                                                                            <ul class="uk-list uk-list-collapse">
                                                                                    <li>Mo. - Fr.: 8:00 - 12:00 Uhr</li>
                                                                                    <li>Mo. - Do.: 13:00 - 17:00 Uhr</li>
                                                                                </ul>
                                                                        </div>
                                    <p><strong>Freitag nachmittag und Samstag geschlossen. An gesetzlichen Feiertagen geschlossen.</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <div class="uk-section-muted uk-section uk-section-small">
            <div class="uk-container uk-container-large">
                <div class="uk-grid tm-grid-expand uk-grid-margin" data-uk-grid>
                    <div class="uk-width-1-4@m">
                        <div class="uk-h5 uk-margin-remove-vertical uk-text-left@m uk-text-center">
                            <NuxtLink to="/" class="el-link uk-link-reset">Parkett Stelzl</NuxtLink>
                        </div>
                        <div class="uk-divider-small uk-margin-small uk-width-small uk-visible@m"></div>
                    </div>
                    <div class="uk-width-1-2@m">
                        <div class="uk-text-center">
                            <ul class="uk-margin-remove-bottom uk-subnav  uk-subnav-divider uk-flex-center" data-uk-margin>
                                <li class="el-item">
                                    <NuxtLink to="/agb" class="el-link">AGB</NuxtLink>
                                </li>
                                <li class="el-item">
                                    <NuxtLink to="/impressum" class="el-link">Impressum</NuxtLink>
                                </li>
                                <li class="el-item">
                                    <NuxtLink to="/datenschutz" class="el-link">Datenschutz</NuxtLink>
                                </li>
                            </ul>
                        </div>
                        <div class="uk-panel uk-text-small uk-text-muted uk-margin uk-text-center@m uk-text-center">© 2023 Parkett Stelzl. Alle Rechte vorbehalten. Created by <a class="uk-link-text" href="https://mate-themes.com" target="_blank" rel="noreferrer">MateThemes</a>.</div>
                    </div>
                    <div class="uk-width-1-4@m">
                        <div class="uk-flex uk-flex-center uk-flex-right@m uk-margin-remove-vertical">
                            <div class="uk-grid uk-child-width-auto uk-grid-column-small uk-grid-match" data-uk-grid>
                                <div>
                                    <div class="el-item uk-panel uk-margin-remove-first-child">
                                        <div class="el-title uk-margin-top uk-margin-remove-bottom">Folgen Sie uns&emsp; —</div>
                                    </div>
                                </div>
                                <div>
                                    <div class="el-item uk-panel uk-margin-remove-first-child">
                                                                            <a href="https://facebook.com/artparkettstelzl" target="_blank" rel="noreferrer">
                                            <span class="el-image uk-text-emphasis uk-icon-link" uk-icon="icon: facebook; width: 20; height: 20;"></span>
                                        </a>
                                                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer> 
</template>