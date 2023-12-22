import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

import { AppLauncher } from '@capacitor/app-launcher';


const checkCanOpenUrl = async () => {
  const { value } = await AppLauncher.canOpenUrl({ url: 'com.dotfoods.packing' });

  console.log('Can open url: ', value);
};

const openPortfolioPage = async () => {
  await AppLauncher.openUrl({ url: 'com.dotfoods.packing' });
};

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, ExploreContainerComponent]
})
export class Tab2Page {

  constructor() {}
  open() {
    checkCanOpenUrl();
    openPortfolioPage();
  }
}
