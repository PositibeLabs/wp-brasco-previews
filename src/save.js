import {RichText, useBlockProps} from '@wordpress/block-editor';

export default function save(props) {
	const {attributes} = props
	const starts = attributes.starts === 0 ? attributes.startsContent.length : attributes.starts
	return (
		<div {...useBlockProps.save()}>
			<div className="brasco-reviews-customer">
				<figure className="">
					<img src={attributes.image}/>
				</figure>
				<RichText.Content
					className="brasco-reviews-name"
					tagName="h6"
					value={attributes.name}/>
			</div>

			<div className="brasco-reviews-starts">
				{[...Array(starts)].map((_, i) => (
					<svg key={i} height="20" width="20">
						<circle cx="10" cy="10" r="8" fill="#01ab6c"/>
						{starts} starts
					</svg>
				))}
			</div>
			<p>
				<RichText.Content
					className="brasco-reviews-title"
					tagName="strong"
					value={attributes.title}/>
			</p>
			<RichText.Content
				className="brasco-reviews-comment"
				tagName="p"
				value={attributes.comment}/>
		</div>
	);
}
