"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Biyaheroes Developers
		@email: developers@biyaheroes.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "prompt",
			"path": "prompt/prompt.jsx",
			"file": "prompt.jsx",
			"module": "prompt",
			"author": "Biyaheroes Developers",
			"contributors": [
				"Robot Biyaheroes <robot@biyaheroes.com>",
				"Richeve S. Bebedor <richeve.bebedor@gmail.com>"
			],
			"eMail": "developers@biyaheroes.com",
			"repository": "https://github.com/Biyaheroes/bh-mj-prompt.git",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Biyaheroes MJML Prompt Component.
	@end-module-documentation

	@include:
		{
			"PureComponent": "react.PureComponent",
			"Column": "mjml-column",
			"MJMLElement": "mjml-core",
			"React": "react",
			"Section": "mjml-section",
			"Text": "mjml-text",
			"wichevr": "wichevr"
		}
	@end-include
*/



import $ from "jquery";
import React, { PureComponent } from "react";
import ReactDOM from "react-dom"

import { MJMLElement } from "mjml-core";

import Column from "mjml-column";
import Section from "mjml-section";
import Text from "mjml-text";

import wichevr from "wichevr";

const tagName = "mj-prompt";

const parentTag = [ "mj-container", "mj-wrapper" ];

const endingTag = false;

const defaultMJMLDefinition = {
	"content": "",
	"attributes": {
		"name": "",
		"background-color": "white",
		"foreground-color": "black",
		"side-color": "gray",
		"message": ""
	}
};

@MJMLElement
class Prompt extends PureComponent {
	resolve( property ){
		const { mjAttribute } = property;

		let {
			name,
			message,
			backgroundColor, foregroundColor, sideColor
		} = property;

		return {
			"name": wichevr( name, mjAttribute( "name" ) ),
			"message": wichevr( message, mjAttribute( "message" ) ),
			"backgroundColor": wichevr( backgroundColor, mjAttribute( "background-color" ) ),
			"foregroundColor": wichevr( foregroundColor, mjAttribute( "foreground-color" ) ),
			"sideColor": wichevr( sideColor, mjAttribute( "side-color" ) )
		};
	}

	componentWillMount( ){
		this.setState( { "data": this.resolve( this.props ) } );
	}

	componentWillReceiveProps( property ){
		this.setState( { "data": this.resolve( property ) } );
	}

	render( ){
		let { message, backgroundColor, foregroundColor, sideColor } = this.state.data;

		return (
			<Section
				{ ...this.props }
			>
				<Column
					background-color={ backgroundColor }
					border-left={ `10px solid ${ sideColor }` }
				>
					<Text
						css-class="message"
						color={ foregroundColor }
						font-size = "15px"
						letter-spacing = "0.5px"
						padding="20px 20px 20px 20px"
					>
						{ message }
					</Text>
				</Column>
			</Section>
		);
	}

	componentDidMount( ){
		$( ReactDOM.findDOMNode( this ) )
			.addClass( "bh-mj-prompt" )
			.addClass( this.state.data.name )
			.append( `
				<link
					class="bh-mj-prompt style"
					rel="stylesheet"
					type="text/css"
					href="https://unpkg.com/bh-mj-prompt/prompt.css"
				/>
			` );
	}

	componentWillUnmount( ){
		$( ".bh-mj-prompt.style" ).remove( );
	}
}

Prompt.tagName = tagName;
Prompt.parentTag = parentTag;
Prompt.endingTag = endingTag;
Prompt.defaultMJMLDefinition = defaultMJMLDefinition;

export default Prompt;
