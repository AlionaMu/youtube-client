export interface SearchItem {
    kind: string;
    etag: string;
    id: string;
    snippet: Snippet;
    statistics: Statistics;
}

interface Snippet {
    publishedAt: string,
    channelId: string,
    title: string,
    description: string,
    thumbnails: Thumbnails,
    channelTitle: string,
    tags: string[],
    categoryId: string,
    liveBroadcastContent: string,
    defaultLanguage?: string;
    localized: Localized,
    defaultAudioLanguage: string;
}

interface Thumbnails {
    default: ThumbnailsItem;
    medium: ThumbnailsItem;
    high: ThumbnailsItem;
    standard: ThumbnailsItem;
    maxres: ThumbnailsItem;
}

interface ThumbnailsItem {
    url: string;
    width: number;
    height: number;
}

interface Localized {
    title: string;
    description: number;
}

interface Statistics {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
}
