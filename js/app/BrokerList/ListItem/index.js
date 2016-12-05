/*
 Copyright (c) 2016, salesforce.com, inc. All rights reserved.
 
 Redistribution and use of this software in source and binary forms, with or without modification,
 are permitted provided that the following conditions are met:
 * Redistributions of source code must retain the above copyright notice, this list of conditions
 and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list of
 conditions and the following disclaimer in the documentation and/or other materials provided
 with the distribution.
 * Neither the name of salesforce.com, inc. nor the names of its contributors may be used to
 endorse or promote products derived from this software without specific prior written
 permission of salesforce.com, inc.
 
 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
 IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
 CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY
 WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
 
'use strict';

import React from 'react';

import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';


import Theme from 'react.force.base.theme';

import styles from './styles';

import {utils} from 'react.force.data';


module.exports = React.createClass({

    contextTypes: {
      sobj: React.PropTypes.object
    },

    handlePress() {
      if(this.props.navigator){
        this.props.navigator.push({
          name:'brokerDetail',
          sobj: this.context.sobj
        });
      }
    },

    render () {
      const imgConfig = utils.parseImageHTML(this.context.sobj['Picture_IMG__c']);
      const title = this.context.sobj.Name;
      const detail = this.context.sobj['Title__c']?this.context.sobj['Title__c']:' ';
      return (
        <TouchableOpacity onPress={this.handlePress}>
          <Theme.Tiles.List 
            title={title} 
            detail={detail}
            image={<Image 
                  style={styles.image}
                  source={{uri: imgConfig.url }}
                />} />
        </TouchableOpacity>
      );
    }
});