import * as React from 'react';
import styles from './SpfxLifeCycle.module.scss';
import { ISpfxLifeCycleProps } from './ISpfxLifeCycleProps';
import { escape } from '@microsoft/sp-lodash-subset';


export interface IExampleState{
  lists: string[];
  count: number;
}

export default class SpfxLifeCycle extends React.Component<ISpfxLifeCycleProps, IExampleState> {

  constructor(props){
    super(props);
    this.state={
        lists:[],
        count:0
    };
}

  public render(): React.ReactElement<ISpfxLifeCycleProps> {

    console.log("Custom - Component - Render method is called");

    const _lists= this.state.lists.map(function(list){
      return <li>{list}</li>;
  }); 

    return (
      <div className={ styles.spfxLifeCycle }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <p className={ styles.description }>Site Url:{escape(this.props.siteUrl)}</p>              
              <a className={ styles.button } onClick={()=>this.addNewList("New List")}>
                <span className={ styles.label }>Add New List</span>
              </a>
              <ul>
                  {_lists}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  addNewList(listName: string){
    console.log("Custom - Component - User action triggered a method");
    //all Sharepoint functionality to add the list in the site.
    //Now fecthing the list of SP Lists from site. Assume _lists is that.        
    const _lists : string[]= ["list1","list2","list3","New List"];
    //Updating the state as the list of SP Lists were changed.
    console.log("Custom - Component - State is getting updated");
    this.setState({
        lists:_lists,
       count:_lists.length
    });
    //Once the state is chnaged, the component will automatically re-renders.
} 


  componentDidMount(){
    console.log("Custom - componentDidMount event triggered.");
  }

  componentWillMount(){
    console.log("Custom - componentWillMount event triggered.");
  }

  componentWillUpdate(){
    console.log("Custom - componentWillUpdate event triggered.");
  }

  componentDidUpdate(){
    console.log("Custom - componentDidUpdate event triggered.");
  }

  componentWillUnmount(){
    console.log("Custom - componentWillUnmount event triggered.");
  }

  componentWillReceiveProps(){
    console.log("Custom - componentWillReceiveProps event triggered.");
  }
}
