import { Slider } from "./slider.js";
import { Locations } from "./locations";
import { BackgroundScrollAnimation } from "./bg-scroll-animation";
import { Video } from "./video.js";
import { OfferingHeader } from "./offering-header";
import { Offerings } from "./offerings";
import { SlideIn } from "./animate-slidein";
import { Parallax } from "./parallax";

(() => {
	new Locations();
	new Slider();
	new BackgroundScrollAnimation();
	new Video();
	new OfferingHeader();
	new Offerings();
	new SlideIn();
	new Parallax();
})();
