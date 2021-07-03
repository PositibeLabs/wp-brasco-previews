import {__} from '@wordpress/i18n';
import {useBlockProps, InspectorControls, MediaUpload, RichText} from '@wordpress/block-editor';
import {PanelBody, Button, Spinner, RangeControl} from '@wordpress/components';
import './editor.scss';

export default function Edit(props) {
	const {attributes, setAttributes} = props
	return (
		<div {...useBlockProps()}>
			<InspectorControls key="settings">
				<PanelBody title={__('Background Image', 'editor-blocks')}>
					{!!attributes.image &&
					<MediaUpload
						title={__('Set featured image', 'editor-blocks')}
						onSelect={(value) => setAttributes({image: value.url})}
						type="image"
						modalClass="editor-post-featured-image__media-modal"
						render={({open}) => (
							<Button className="editor-post-featured-image__preview" onClick={open}>
								{attributes.image &&
								<img src={attributes.image} alt={__('Featured image', 'editor-blocks')}/>
								}
								{!attributes.image && <Spinner/>}
							</Button>
						)}
					/>
					}
					{!attributes.image &&
					<MediaUpload
						onSelect={(value) => setAttributes({image: value.url})}
						type="image"
						value={attributes.image}
						render={({open}) => (
							<Button className="button" onClick={open}>
								{__('Open Media Library', 'editor-blocks')}
							</Button>
						)}
					/>
					}
					{!!attributes.image &&
					<Button onClick={() => setAttributes({image: undefined})} isLink isDestructive>
						{__('Remove Image', 'editor-blocks')}
					</Button>
					}
				</PanelBody>
				<PanelBody title={__('Starts', 'editor-blocks')}>
					<RangeControl
						value={attributes.starts}
						label={__('Amount of start (from 1 to 5)', 'editor-blocks')}
						onChange={(starts) => setAttributes({starts})}
						min={1}
						max={5}
						step={1}
					/>
				</PanelBody>
			</InspectorControls>
			<div className="brasco-reviews-customer">
				<figure className="">
					<img src={attributes.image}/>
				</figure>
				<RichText
					className="brasco-reviews-name"
					tagName="h6"
					onChange={(name) => setAttributes({name})}
					value={attributes.name}
				/>
			</div>

			<div className="brasco-reviews-starts">
				{[...Array(attributes.starts)].map((_, i) => (
					<svg  key={i} height="20" width="20">
						<circle cx="10" cy="10" r="8" fill="#01ab6c"/>
						{attributes.starts} starts
					</svg>
				))}
			</div>
			<p>
				<RichText
					className="brasco-reviews-title"
					tagName="strong"
					onChange={(title) => setAttributes({title})}
					value={attributes.title}
				/>
			</p>

			<RichText
				className="brasco-reviews-comment"
				tagName="p"
				onChange={(comment) => setAttributes({comment})}
				value={attributes.comment}
			/>
		</div>
	);
}
