import React from 'react';
import { Text, View } from 'react-native';
import db from '../config'
export default class Searchscreen extends React.Component {
  constructor(props)
  {
    super(props)
    this.state={
      allTransaction:[],
     lastVisibleTranction:null,
     search:''
    }
  }
  fetchMoreTranction=async() => {
    var text= this.state.search.toUpperCase()
    var enteredText=text.split("")

    if(enteredText[0].toUpperCase()==='B')
    {
      const query=await db.collection("trancaction").where('bookId','==',text).startAfter(this.state.lastVisibleTranction).limit(10).get()
      query.docs.map((doc)=>{
        this.setState({
          allTransaction:[...this.state.allTransaction,doc.data()],
          lastVisibleTranction:doc
        })
      })
    

    }
    else if(enteredText[0].toUpperCase()==='s')
    {
      const query=await db.collection("trancaction").where('StudentId','==',text).startAfter(this.state.lastVisibleTranction).limit(10).get()
      query.docs.map((doc)=>{
        this.setState({
          allTransaction:[...this.state.allTransaction,doc.data()],
          lastVisibleTranction:doc
        })
      })
    

    }
  }

  searchTransactions=async(text)=>{
    var enteredText=text.split("")
    if(enteredText[0].toUpperCase()==='B')
    {
      const trancastion=await db.collection("trancaction").where('bookId','==',text).get()
      trancastion.docs.map((doc)=>{
        this.setState({
          allTransaction:[...this.state.allTransaction,doc.data()],
          lastVisibleTranction:doc
        })
      })
    

    }
    else if(enteredText[0].toUpperCase()==='s')
    {
      const trancaction=await db.collection("trancaction").where('StudentId','==',text).get()
      trancaction.docs.map((doc)=>{
        this.setState({
          allTransaction:[...this.state.allTransaction,doc.data()],
          lastVisibleTranction:doc
        })
      })
    

    

  }}
  componentDidMount=async()=>
  {
    const query=await db.collection("transaction").limit(10).get()
    query.docs.map((doc)=>{
      this.setState({
        allTransaction:[],
        lastVisibleTranction:doc
      })
    })
  }
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Search</Text>
        </View>
      );
    }
  }