import
{
	AfterViewInit,
	Component,
	ElementRef,
	Input,
	OnInit
} 								from '@angular/core';

import { Ng2TweetService }		from '../../services/index';

@Component({
	selector: 'ng2-tweet',
	template: ``,
	styles: [ `` ],
	providers: []
})
export class Ng2TweetComponent implements OnInit, AfterViewInit
{
	@Input() tweetId: string;

	constructor
	(
		private element: ElementRef,
		private ng2TweetService : Ng2TweetService
	)
	{
	}

	ngOnInit()
	{
	}

	ngAfterViewInit()
	{
		//MAKE SURE TWITTER WIDGET SCRIPT IS LOADED IN HEAD...
		this.ng2TweetService.LoadScript().subscribe 
		(
			//SUCCESS, WE HAVE TWITTER WIDGETS JS FILE LOADED...
			twttr =>
			{
				let nativeElement = this.element.nativeElement;

				window['twttr'].widgets.createTweet(this.tweetId, nativeElement, {}).then
				(
					function success(embed) 
					{
						//console.log('Created tweet widget: ', embed);
					} 
				).catch
				(
					function creationError(message) 
					{
						//console.log('Could not create widget: ', message);
					}
				);				
			},

			//ERROR
			err =>
			{
				console.log('****  ERROR LOADING TWITTER WIDGET', err);
			},
			
			//COMPLETE
			() =>
			{
			}			
		);
	}

	private onTwitterLoaded(twttr)
	{
		console.log('TWITTER LOADED YO', twttr);
	};
}