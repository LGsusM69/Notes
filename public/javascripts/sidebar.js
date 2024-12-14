function syncTitle(source) {
    // Get the editor and sidebar title elements
    const editorTitle = document.querySelector('.editor-title');
    const sidebarTitle = document.querySelector('.note-title');

    // Check the source and sync titles accordingly
    if (source === 'editor') {
        // Update the sidebar title when the editor title changes
        sidebarTitle.textContent = editorTitle.textContent.trim();
    } else if (source === 'sidebar') {
        // Update the editor title when the sidebar title changes
        editorTitle.textContent = sidebarTitle.textContent.trim();
    }
}