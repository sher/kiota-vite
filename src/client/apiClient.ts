/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { PostsRequestBuilderNavigationMetadata, PostsRequestBuilderRequestsMetadata, type PostsRequestBuilder } from './posts/';
import { apiClientProxifier, registerDefaultDeserializer, registerDefaultSerializer, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type RequestAdapter } from '@microsoft/kiota-abstractions';
import { FormParseNodeFactory, FormSerializationWriterFactory } from '@microsoft/kiota-serialization-form';
import { JsonParseNodeFactory, JsonSerializationWriterFactory } from '@microsoft/kiota-serialization-json';
import { MultipartSerializationWriterFactory } from '@microsoft/kiota-serialization-multipart';
import { TextParseNodeFactory, TextSerializationWriterFactory } from '@microsoft/kiota-serialization-text';

/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface ApiClient extends BaseRequestBuilder<ApiClient> {
    /**
     * The posts property
     */
    get posts(): PostsRequestBuilder;
}
/**
 * Instantiates a new {@link ApiClient} and sets the default values.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
export function createApiClient(requestAdapter: RequestAdapter) {
    registerDefaultSerializer(JsonSerializationWriterFactory);
    registerDefaultSerializer(TextSerializationWriterFactory);
    registerDefaultSerializer(FormSerializationWriterFactory);
    registerDefaultSerializer(MultipartSerializationWriterFactory);
    registerDefaultDeserializer(JsonParseNodeFactory);
    registerDefaultDeserializer(TextParseNodeFactory);
    registerDefaultDeserializer(FormParseNodeFactory);
    if (requestAdapter.baseUrl === undefined || requestAdapter.baseUrl === "") {
        requestAdapter.baseUrl = "https://dummyjson.com";
    }
    const pathParameters: Record<string, unknown> = {
        "baseurl": requestAdapter.baseUrl,
    };
    return apiClientProxifier<ApiClient>(requestAdapter, pathParameters, ApiClientNavigationMetadata, undefined);
}
/**
 * Uri template for the request builder.
 */
export const ApiClientUriTemplate = "{+baseurl}";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ApiClientNavigationMetadata: Record<Exclude<keyof ApiClient, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    posts: {
        requestsMetadata: PostsRequestBuilderRequestsMetadata,
        navigationMetadata: PostsRequestBuilderNavigationMetadata,
    },
};
/* tslint:enable */
/* eslint-enable */
