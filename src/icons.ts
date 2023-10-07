/**
 * This file adds the 'Exclamation Triangle' icon from the FontAwesome icon library to the currently active library.
 * 
 * @packageDocumentation
 */

import { library, IconName } from '@fortawesome/fontawesome-svg-core';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

/**
 * Adds the 'Exclamation Triangle' icon to the currently active library.
 * 
 * @param library - The currently active font awesome icon library.
 * @returns void
 */
function addIconToLibrary(library: IconName[]): void {
  library.add(faExclamationTriangle);
}

addIconToLibrary(library);

export {}