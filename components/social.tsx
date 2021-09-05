import styles from "@styles/Social.module.css";
import Image from "next/image";

const Socials: React.FC = () => (
	<div className={styles.linkSection}>
		<SocialLink
			site="GitHub"
			link="https://github.com/joshpetit"
			image="/github.png"
		/>
		<SocialLink
			site="LinkedIn"
			link="https://linkedin.com/in/joshua-petitma/"
			image="/li.png"
		/>
		<SocialLink
			site="Instagram"
			link="https://instagram.com/josh.petitma/"
			image="/insta.webp"
		/>
	</div>
);

interface SocialProps {
	site: string;
	link: string;
	image: string;
}

const SocialLink: React.FC<SocialProps> = ({ site, link, image }) => (
	<a target="_blank" rel="noreferrer" href={link}>
		<div className={styles.socialLink}>
			<div className={styles.socialImage}>
				<Image src={image} alt="ok" height="27px" width="27px" />
			</div>
			{site}
		</div>
	</a>
);
export default Socials;
