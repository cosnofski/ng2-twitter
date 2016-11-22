import { NgModule, ModuleWithProviders }	from '@angular/core';
import { CommonModule }						from '@angular/common';


@NgModule({
	imports:
	[
		CommonModule
	],
	declarations:
	[
	],
	exports:
	[
	],
	providers:
	[
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