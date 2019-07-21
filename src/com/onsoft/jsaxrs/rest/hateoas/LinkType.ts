/**
 * The <code>LinkType</code> enum defines all type of links that can be used to let an application to be managed by
 * Hypermedia.
 * 
 * @see https://www.w3.org/TR/html50/links.html#linkTypes
 */
export enum LinkType {
    
    /**
     * Gives alternate representations of the current document.
     */
    ALTERNATE = 'alternate',
    
    /**
     * Gives a link to the author of the current document or article.
     */
    AUTHOR = 'author',
    
    /**
     * Gives the permalink for the nearest ancestor section.
     */
    BOOKMARK = 'bookmark',
    
    /**
     * Provides a link to context-sensitive help.
     */
    HELP = 'help',
    
    /**
     * Indicates that the main content of the current document is covered by the copyright license described by the
     * referenced document.
     */
    LICENSE = 'license',

    /**
     * Indicates that the current document is a part of a series, and that the next document in the series is the
     * referenced document.
     */
    NEXT = 'next',
    
    /**
     * Indicates that the current document is a part of a series, and that the previous document in the series is the
     * referenced document.
     */
    PREV = 'prev',
    
    /**
     * Gives a link to a resource that can be used to search through the current document and its related pages.
     */
    SEARCH = 'search',
    
    /**
     * Gives a tag (identified by the given address) that applies to the current document.
     */
    TAG = 'tag'
}