import React, { Component } from 'react';
class Read extends React.Component {
 constructor() {
      super();
      this.state = {
         data:
         [
            {
               "name":"Raja",
               "ID":1234,
               "number":"9475863788"

            },
            {
               "name":"Raj",
               "ID":1234,
               "number":"835647523"
            },
            {
               "name":"Lakshmi",
               "ID":1234,
               "number":"84536725432"
            }
         ]
      }
   }
   render() {
      return (
         <div className = "Wlc">

            <ul>
                {this.state.data.map((item) => <List data = {item} />)}
            </ul>
         </div>
      );
   }
}
class List extends React.Component {
   render() {
      return (
        <div>
            <h1>Name :- {this.props.data.name}</h1>
            <h3>Emp Id :-  {this.props.data.ID}</h3>
            <h6>Phone number :- {this.props.data.number}</h6>
          </div>
      );
   }
}

export default Read;
