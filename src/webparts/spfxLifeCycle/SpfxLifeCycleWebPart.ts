import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import * as strings from 'SpfxLifeCycleWebPartStrings';
import SpfxLifeCycle from './components/SpfxLifeCycle';
import { ISpfxLifeCycleProps } from './components/ISpfxLifeCycleProps';

export interface ISpfxLifeCycleWebPartProps {
  description: string;
}

export default class SpfxLifeCycleWebPart extends BaseClientSideWebPart<ISpfxLifeCycleWebPartProps> {


  constructor(){
    super();
    console.log("Custom - Main Webpart Constructor");
  }

  public render(): void {

    console.log("Custom - Main Webpart Calling Component");

    const element: React.ReactElement<ISpfxLifeCycleProps > = React.createElement(
      SpfxLifeCycle,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);

    console.log("Custom - Main Webpart received JSX from component , now rendering JSX");

  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
