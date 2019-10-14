import { Navigation } from 'react-navigation';

let navigator;

function setNavigator(ref) {
  navigator = ref;
}
export default function navigate(routeName, params) {
  NavigationActions.navigate({
    routeName,
    params,
  });
}
