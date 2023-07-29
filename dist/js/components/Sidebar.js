import { inlineStyles } from '../utils/styles.js';
export default function SideBar() {
    const asideStyles = inlineStyles({
        flex: '15%',
        backgroundColor: 'grey',
    });
    return /*html*/ `<aside style="${asideStyles}"></aside>`;
}
