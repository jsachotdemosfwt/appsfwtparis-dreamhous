import {ViewChild} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {App, Platform} from 'ionic-angular';

import {WelcomePage} from './pages/welcome/welcome';
import {PropertyListPage} from './pages/property-list/property-list';
import {BrokerListPage} from './pages/broker-list/broker-list';
import {FavoriteListPage} from './pages/favorite-list/favorite-list';
import {PhotoSearchPage} from './pages/photo-search/photo-search';
import {PropertyService} from './services/property-service';
import {BrokerService} from './services/broker-service';
import {SearchService} from './services/search-service';

@App({
    templateUrl: 'build/app.html',
    config: {
        mode: "ios"
    },
    queries: {
        nav: new ViewChild('content')
    },
    providers: [HTTP_PROVIDERS, PropertyService, BrokerService, SearchService]
})
class MyApp {

    static get parameters() {
        return [[Platform]];
    }

    constructor(platform) {

        this.platform = platform;

        this.pages = [
            {title: 'Bienvenue', component: WelcomePage, icon: "bookmark"},
            {title: 'Maisons', component: PropertyListPage, icon: "home"},
            {title: 'Agents immobiliers', component: BrokerListPage, icon: "people"},
            {title: 'Favoris', component: FavoriteListPage, icon: "star"}
            {title: 'Einstein Vision', component: PhotoSearchPage, icon: "search"}

        ];

        this.rootPage = WelcomePage;
        this.initializeApp();
    }

    initializeApp() {

    }

    openPage(page) {
        this.nav.setRoot(page.component);
    }

}
