import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFile, faDatabase, faClock, faTasks, faChevronCircleDown, faChevronLeft, faChevronRight
} from '@fortawesome/free-solid-svg-icons';

export const File = () => <FontAwesomeIcon icon={faFile} />
export const Database = () => <FontAwesomeIcon icon={faDatabase} />
export const Clock = () => <FontAwesomeIcon icon={faClock} />
export const Tasks = () => <FontAwesomeIcon icon={faTasks} />
export const CircleArrowDown = () => <FontAwesomeIcon icon={faChevronCircleDown} />
export const ArrowLeft = () => <FontAwesomeIcon icon={faChevronLeft} />
export const ArrowRight = () => <FontAwesomeIcon icon={faChevronRight} />
