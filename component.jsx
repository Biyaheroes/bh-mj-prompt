
"use strict";

import React from "react";
import ReactDOM from "react-dom";

import Prompt from "./prompt.js";

ReactDOM.render(
	<Prompt
		message="Sorry this is a failed prompt."
		background-color="#c4322f"
		foreground-color="white"
		side-color="#be1c18"
	>
	</Prompt>,

	document.getElementById( "root" )
);
