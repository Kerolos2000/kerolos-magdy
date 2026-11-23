export type ThemeAnimationType =
  | 'circle-spread'
  | 'diag-down-right'
  | 'fade-in-out'
  | 'flip-x-in'
  | 'none'
  | 'round-morph'
  | 'shrink-grow'
  | 'split-vertical'
  | 'swipe-down'
  | 'swipe-left'
  | 'swipe-right'
  | 'swipe-up'
  | 'wave-ripple';

interface RunThemeTransitionParams {
  animationType: ThemeAnimationType;
  duration: number;
  element: HTMLElement;
}

const animateRoot = (
  keyframes: Keyframe[] | PropertyIndexedKeyframes,
  options: KeyframeAnimationOptions,
) => {
  document.documentElement.animate(keyframes, options);
};

export const runThemeTransition = ({
  animationType,
  duration,
  element,
}: RunThemeTransitionParams) => {
  const { height, left, top, width } = element.getBoundingClientRect();
  const x = left + width / 2;
  const y = top + height / 2;
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const maxRadius = Math.hypot(
    Math.max(left, viewportWidth - left),
    Math.max(top, viewportHeight - top),
  );
  const newRoot = '::view-transition-new(root)';
  const oldRoot = '::view-transition-old(root)';

  switch (animationType) {
    case 'circle-spread':
      animateRoot(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${maxRadius}px at ${x}px ${y}px)`] },
        { duration, easing: 'ease-in-out', pseudoElement: newRoot },
      );
      break;

    case 'round-morph':
      animateRoot(
        [
          { opacity: 0, transform: 'scale(0.8) rotate(5deg)' },
          { opacity: 1, transform: 'scale(1) rotate(0deg)' },
        ],
        {
          duration: duration * 1.2,
          easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
          pseudoElement: newRoot,
        },
      );
      break;

    case 'swipe-left':
      animateRoot(
        { clipPath: [`inset(0 0 0 ${viewportWidth}px)`, 'inset(0 0 0 0)'] },
        { duration, easing: 'cubic-bezier(0.2, 0, 0, 1)', pseudoElement: newRoot },
      );
      break;

    case 'swipe-up':
      animateRoot(
        { clipPath: [`inset(${viewportHeight}px 0 0 0)`, 'inset(0 0 0 0)'] },
        { duration, easing: 'cubic-bezier(0.2, 0, 0, 1)', pseudoElement: newRoot },
      );
      break;

    case 'diag-down-right':
      animateRoot(
        { clipPath: ['polygon(0 0, 0 0, 0 0, 0 0)', 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'] },
        {
          duration: duration * 1.5,
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
          pseudoElement: newRoot,
        },
      );
      break;

    case 'fade-in-out':
      animateRoot(
        { opacity: [0, 1] },
        { duration: duration * 0.5, easing: 'ease-in-out', pseudoElement: newRoot },
      );
      break;

    case 'shrink-grow':
      animateRoot(
        [
          { opacity: 0, transform: 'scale(0.9)' },
          { opacity: 1, transform: 'scale(1)' },
        ],
        {
          duration: duration * 1.2,
          easing: 'cubic-bezier(0.19, 1, 0.22, 1)',
          pseudoElement: newRoot,
        },
      );
      animateRoot(
        [
          { opacity: 1, transform: 'scale(1)' },
          { opacity: 0, transform: 'scale(1.05)' },
        ],
        {
          duration: duration * 1.2,
          easing: 'cubic-bezier(0.19, 1, 0.22, 1)',
          pseudoElement: oldRoot,
        },
      );
      break;

    case 'flip-x-in': {
      const styleElement = document.createElement('style');

      styleElement.textContent = `
        ::view-transition-group(root) { perspective: 1000px; }
        ::view-transition-old(root) { transform-origin: center; animation: flip-out 400ms forwards; }
        ::view-transition-new(root) { transform-origin: center; animation: flip-in 400ms forwards; }
        @keyframes flip-out { from { transform: rotateY(0deg); opacity: 1; } to { transform: rotateY(-90deg); opacity: 0; } }
        @keyframes flip-in { from { transform: rotateY(90deg); opacity: 0; } to { transform: rotateY(0deg); opacity: 1; } }
      `;
      document.head.appendChild(styleElement);
      break;
    }

    case 'split-vertical':
      animateRoot([{ opacity: 0 }, { opacity: 1 }], {
        duration: duration * 0.75,
        easing: 'ease-in',
        pseudoElement: newRoot,
      });
      animateRoot(
        [
          { clipPath: 'inset(0 0 0 0)', transform: 'none' },
          { clipPath: 'inset(0 40% 0 40%)', transform: 'scale(1.2)' },
          { clipPath: 'inset(0 50% 0 50%)', transform: 'scale(1)' },
        ],
        {
          duration: duration * 1.5,
          easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
          pseudoElement: oldRoot,
        },
      );
      break;

    case 'swipe-right':
      animateRoot(
        { clipPath: [`inset(0 ${viewportWidth}px 0 0)`, 'inset(0 0 0 0)'] },
        { duration, easing: 'cubic-bezier(0.2, 0, 0, 1)', pseudoElement: newRoot },
      );
      break;

    case 'swipe-down':
      animateRoot(
        { clipPath: [`inset(0 0 ${viewportHeight}px 0)`, 'inset(0 0 0 0)'] },
        { duration, easing: 'cubic-bezier(0.2, 0, 0, 1)', pseudoElement: newRoot },
      );
      break;

    case 'wave-ripple':
      animateRoot(
        { clipPath: ['circle(0% at 50% 50%)', `circle(${maxRadius}px at 50% 50%)`] },
        {
          duration: duration * 1.5,
          easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
          pseudoElement: newRoot,
        },
      );
      break;

    case 'none':
    default:
      break;
  }
};
