import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Gallery from './Gallery'
import GalleryIndex from './GalleryIndex'
import { fetchUserGalleries } from '../actions'
import Search from './Search'
import SearchResults from './SearchResults'

class User extends Component{
  render(){
    return(
      <div>
        < Search />
        < SearchResults />
        <h1>User component</h1>
        <GalleryIndex />
        <Gallery />
    </div>
    )
  }
}


function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchUserGalleries}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
