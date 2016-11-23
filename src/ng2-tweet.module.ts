import { NgModule, ModuleWithProviders }	from '@angular/core';
import { CommonModule }						from '@angular/common';


import
{
	//ng2-tweet
	Ng2TweetComponent,

	Ng2TweetService
} 											from './index';


@NgModule({
	imports:
	[
		CommonModule
	],
	declarations:
	[
		Ng2TweetComponent
	],
	exports:
	[
		Ng2TweetComponent
	],
	providers:
	[
		Ng2TweetService
	]
})
export class Ng2TweetModule 
{
	static forRoot(): ModuleWithProviders
	{
		return {
			ngModule: Ng2TweetModule,
			providers:
			[ 
			]
		};
	}	
}