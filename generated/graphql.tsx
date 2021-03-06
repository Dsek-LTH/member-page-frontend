import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Datetime: any;
  UUID: any;
  Url: any;
};

export type AccessMutations = {
  __typename?: 'AccessMutations';
  door?: Maybe<DoorMutations>;
  policy?: Maybe<PolicyMutations>;
};

export type AccessPolicy = {
  __typename?: 'AccessPolicy';
  accessor: Scalars['String'];
  id: Scalars['UUID'];
};

export type Api = {
  __typename?: 'Api';
  accessPolicies?: Maybe<Array<AccessPolicy>>;
  name: Scalars['String'];
};

export type Article = {
  __typename?: 'Article';
  author: Member;
  body: Scalars['String'];
  bodyEn?: Maybe<Scalars['String']>;
  header: Scalars['String'];
  headerEn?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  imageUrl?: Maybe<Scalars['Url']>;
  latestEditDatetime?: Maybe<Scalars['Datetime']>;
  publishedDatetime: Scalars['Datetime'];
};

export type ArticleMutations = {
  __typename?: 'ArticleMutations';
  create?: Maybe<CreateArticlePayload>;
  presignedPutUrl?: Maybe<Scalars['String']>;
  remove?: Maybe<RemoveArticlePayload>;
  update?: Maybe<UpdateArticlePayload>;
};


export type ArticleMutationsCreateArgs = {
  input: CreateArticle;
};


export type ArticleMutationsPresignedPutUrlArgs = {
  fileName: Scalars['String'];
};


export type ArticleMutationsRemoveArgs = {
  id: Scalars['UUID'];
};


export type ArticleMutationsUpdateArgs = {
  id: Scalars['UUID'];
  input: UpdateArticle;
};

export type ArticlePagination = {
  __typename?: 'ArticlePagination';
  articles: Array<Maybe<Article>>;
  pageInfo: PaginationInfo;
};

export type Bookable = {
  __typename?: 'Bookable';
  id: Scalars['UUID'];
  name: Scalars['String'];
  name_en: Scalars['String'];
};

export type BookingFilter = {
  from?: Maybe<Scalars['Datetime']>;
  status?: Maybe<BookingStatus>;
  to?: Maybe<Scalars['Datetime']>;
  what?: Maybe<Scalars['String']>;
};

export type BookingRequest = {
  __typename?: 'BookingRequest';
  booker: Member;
  created: Scalars['Datetime'];
  end: Scalars['Datetime'];
  event: Scalars['String'];
  id: Scalars['UUID'];
  last_modified?: Maybe<Scalars['Datetime']>;
  start: Scalars['Datetime'];
  status: BookingStatus;
  what: Array<Maybe<Bookable>>;
};

export type BookingRequestMutations = {
  __typename?: 'BookingRequestMutations';
  accept?: Maybe<Scalars['Boolean']>;
  create?: Maybe<BookingRequest>;
  deny?: Maybe<Scalars['Boolean']>;
  remove?: Maybe<BookingRequest>;
  update?: Maybe<BookingRequest>;
};


export type BookingRequestMutationsAcceptArgs = {
  id: Scalars['UUID'];
};


export type BookingRequestMutationsCreateArgs = {
  input: CreateBookingRequest;
};


export type BookingRequestMutationsDenyArgs = {
  id: Scalars['UUID'];
};


export type BookingRequestMutationsRemoveArgs = {
  id: Scalars['UUID'];
};


export type BookingRequestMutationsUpdateArgs = {
  id: Scalars['UUID'];
  input: UpdateBookingRequest;
};

export enum BookingStatus {
  Accepted = 'ACCEPTED',
  Denied = 'DENIED',
  Pending = 'PENDING'
}

export type Committee = {
  __typename?: 'Committee';
  id: Scalars['UUID'];
  name?: Maybe<Scalars['String']>;
};

export type CommitteeFilter = {
  id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
};

export type CommitteeMutations = {
  __typename?: 'CommitteeMutations';
  create?: Maybe<Committee>;
  remove?: Maybe<Committee>;
  update?: Maybe<Committee>;
};


export type CommitteeMutationsCreateArgs = {
  input: CreateCommittee;
};


export type CommitteeMutationsRemoveArgs = {
  id: Scalars['UUID'];
};


export type CommitteeMutationsUpdateArgs = {
  id: Scalars['UUID'];
  input: UpdateCommittee;
};

export type CommitteePagination = {
  __typename?: 'CommitteePagination';
  committees: Array<Maybe<Committee>>;
  pageInfo: PaginationInfo;
};

export type CreateApiAccessPolicy = {
  apiName: Scalars['String'];
  who: Scalars['String'];
};

export type CreateArticle = {
  body: Scalars['String'];
  bodyEn?: Maybe<Scalars['String']>;
  header: Scalars['String'];
  headerEn?: Maybe<Scalars['String']>;
  imageName?: Maybe<Scalars['String']>;
};

export type CreateArticlePayload = {
  __typename?: 'CreateArticlePayload';
  article: Article;
  uploadUrl?: Maybe<Scalars['Url']>;
};

export type CreateBookingRequest = {
  booker_id: Scalars['UUID'];
  end: Scalars['Datetime'];
  event: Scalars['String'];
  start: Scalars['Datetime'];
  what: Array<Scalars['String']>;
};

export type CreateCommittee = {
  name: Scalars['String'];
};

export type CreateDoor = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CreateDoorAccessPolicy = {
  doorName: Scalars['String'];
  who: Scalars['String'];
};

export type CreateEvent = {
  description: Scalars['String'];
  description_en?: Maybe<Scalars['String']>;
  end_datetime: Scalars['Datetime'];
  link?: Maybe<Scalars['String']>;
  location: Scalars['String'];
  organizer: Scalars['String'];
  short_description: Scalars['String'];
  short_description_en?: Maybe<Scalars['String']>;
  start_datetime: Scalars['Datetime'];
  title: Scalars['String'];
  title_en?: Maybe<Scalars['String']>;
};

export type CreateMandate = {
  end_date: Scalars['Date'];
  member_id: Scalars['UUID'];
  position_id: Scalars['String'];
  start_date: Scalars['Date'];
};

export type CreateMember = {
  class_programme: Scalars['String'];
  class_year: Scalars['Int'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  nickname?: Maybe<Scalars['String']>;
  picture_path?: Maybe<Scalars['String']>;
  student_id: Scalars['String'];
};

export type CreatePosition = {
  committee_id?: Maybe<Scalars['UUID']>;
  id: Scalars['String'];
  name: Scalars['String'];
};



export type Door = {
  __typename?: 'Door';
  accessPolicies?: Maybe<Array<AccessPolicy>>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  studentIds?: Maybe<Array<Scalars['String']>>;
};

export type DoorMutations = {
  __typename?: 'DoorMutations';
  create?: Maybe<Door>;
  remove?: Maybe<Door>;
};


export type DoorMutationsCreateArgs = {
  input: CreateDoor;
};


export type DoorMutationsRemoveArgs = {
  name: Scalars['String'];
};

export type Event = {
  __typename?: 'Event';
  author: Member;
  description: Scalars['String'];
  description_en?: Maybe<Scalars['String']>;
  end_datetime: Scalars['Datetime'];
  id: Scalars['UUID'];
  link?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  organizer: Scalars['String'];
  short_description: Scalars['String'];
  short_description_en?: Maybe<Scalars['String']>;
  start_datetime: Scalars['Datetime'];
  title: Scalars['String'];
  title_en?: Maybe<Scalars['String']>;
};

export type EventFilter = {
  end_datetime?: Maybe<Scalars['Datetime']>;
  id?: Maybe<Scalars['UUID']>;
  start_datetime?: Maybe<Scalars['Datetime']>;
};

export type EventMutations = {
  __typename?: 'EventMutations';
  create?: Maybe<Event>;
  remove?: Maybe<Event>;
  update?: Maybe<Event>;
};


export type EventMutationsCreateArgs = {
  input: CreateEvent;
};


export type EventMutationsRemoveArgs = {
  id: Scalars['UUID'];
};


export type EventMutationsUpdateArgs = {
  id: Scalars['UUID'];
  input: UpdateEvent;
};

export type EventPagination = {
  __typename?: 'EventPagination';
  events: Array<Maybe<Event>>;
  pageInfo?: Maybe<PaginationInfo>;
};

export type FileData = {
  __typename?: 'FileData';
  childrenCount?: Maybe<Scalars['Int']>;
  color?: Maybe<Scalars['String']>;
  dndOpenable?: Maybe<Scalars['Boolean']>;
  draggable?: Maybe<Scalars['Boolean']>;
  droppable?: Maybe<Scalars['Boolean']>;
  ext?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isDir?: Maybe<Scalars['Boolean']>;
  isEncrypted?: Maybe<Scalars['Boolean']>;
  isHidden?: Maybe<Scalars['Boolean']>;
  isSymlink?: Maybe<Scalars['Boolean']>;
  modDate?: Maybe<Scalars['Date']>;
  name: Scalars['String'];
  openable?: Maybe<Scalars['Boolean']>;
  selectable?: Maybe<Scalars['Boolean']>;
  size?: Maybe<Scalars['Int']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
};

export type FileMutations = {
  __typename?: 'FileMutations';
  move?: Maybe<Array<Maybe<FileChange>>>;
  remove?: Maybe<Array<Maybe<FileData>>>;
  rename?: Maybe<FileChange>;
};


export type FileMutationsMoveArgs = {
  bucket: Scalars['String'];
  fileNames: Array<Scalars['String']>;
  newFolder: Scalars['String'];
};


export type FileMutationsRemoveArgs = {
  bucket: Scalars['String'];
  fileNames: Array<Scalars['String']>;
};


export type FileMutationsRenameArgs = {
  bucket: Scalars['String'];
  fileName: Scalars['String'];
  newFileName: Scalars['String'];
};

export type Mandate = {
  __typename?: 'Mandate';
  end_date: Scalars['Date'];
  id: Scalars['UUID'];
  member?: Maybe<Member>;
  position?: Maybe<Position>;
  start_date: Scalars['Date'];
};

export type MandateFilter = {
  end_date?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['UUID']>;
  member_id?: Maybe<Scalars['UUID']>;
  position_id?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['Date']>;
};

export type MandateMutations = {
  __typename?: 'MandateMutations';
  create?: Maybe<Mandate>;
  remove?: Maybe<Mandate>;
  update?: Maybe<Mandate>;
};


export type MandateMutationsCreateArgs = {
  input: CreateMandate;
};


export type MandateMutationsRemoveArgs = {
  id: Scalars['UUID'];
};


export type MandateMutationsUpdateArgs = {
  id: Scalars['UUID'];
  input: UpdateMandate;
};

export type MandatePagination = {
  __typename?: 'MandatePagination';
  mandates: Array<Maybe<Mandate>>;
  pageInfo: PaginationInfo;
};

export type Member = {
  __typename?: 'Member';
  class_programme?: Maybe<Scalars['String']>;
  class_year?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  last_name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  picture_path?: Maybe<Scalars['String']>;
  student_id?: Maybe<Scalars['String']>;
};

export type MemberFilter = {
  class_programme?: Maybe<Scalars['String']>;
  class_year?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  last_name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  student_id?: Maybe<Scalars['String']>;
};

export type MemberMutations = {
  __typename?: 'MemberMutations';
  create?: Maybe<Member>;
  remove?: Maybe<Member>;
  update?: Maybe<Member>;
};


export type MemberMutationsCreateArgs = {
  input: CreateMember;
};


export type MemberMutationsRemoveArgs = {
  id: Scalars['UUID'];
};


export type MemberMutationsUpdateArgs = {
  id: Scalars['UUID'];
  input: UpdateMember;
};

export type MemberPagination = {
  __typename?: 'MemberPagination';
  members: Array<Maybe<Member>>;
  pageInfo: PaginationInfo;
};

export type Mutation = {
  __typename?: 'Mutation';
  access?: Maybe<AccessMutations>;
  article?: Maybe<ArticleMutations>;
  bookingRequest?: Maybe<BookingRequestMutations>;
  committee?: Maybe<CommitteeMutations>;
  event?: Maybe<EventMutations>;
  files?: Maybe<FileMutations>;
  mandate?: Maybe<MandateMutations>;
  member?: Maybe<MemberMutations>;
  position?: Maybe<PositionMutations>;
};

export type PaginationInfo = {
  __typename?: 'PaginationInfo';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  page: Scalars['Int'];
  perPage: Scalars['Int'];
  totalItems: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type PolicyMutations = {
  __typename?: 'PolicyMutations';
  createApiAccessPolicy?: Maybe<AccessPolicy>;
  createDoorAccessPolicy?: Maybe<AccessPolicy>;
  remove?: Maybe<AccessPolicy>;
};


export type PolicyMutationsCreateApiAccessPolicyArgs = {
  input: CreateApiAccessPolicy;
};


export type PolicyMutationsCreateDoorAccessPolicyArgs = {
  input: CreateDoorAccessPolicy;
};


export type PolicyMutationsRemoveArgs = {
  id: Scalars['UUID'];
};

export type Position = {
  __typename?: 'Position';
  committee?: Maybe<Committee>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  nameEn?: Maybe<Scalars['String']>;
};

export type PositionFilter = {
  committee_id?: Maybe<Scalars['UUID']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type PositionMutations = {
  __typename?: 'PositionMutations';
  create?: Maybe<Position>;
  remove?: Maybe<Position>;
  update?: Maybe<Position>;
};


export type PositionMutationsCreateArgs = {
  input: CreatePosition;
};


export type PositionMutationsRemoveArgs = {
  id: Scalars['String'];
};


export type PositionMutationsUpdateArgs = {
  id: Scalars['String'];
  input: UpdatePosition;
};

export type PositionPagination = {
  __typename?: 'PositionPagination';
  pageInfo: PaginationInfo;
  positions: Array<Maybe<Position>>;
};

export type Query = {
  __typename?: 'Query';
  accessPolicies?: Maybe<Array<AccessPolicy>>;
  accessPolicy?: Maybe<AccessPolicy>;
  /** returns all apis the singed in member has access to. */
  apiAccess?: Maybe<Array<Api>>;
  article?: Maybe<Article>;
  bookables?: Maybe<Array<Bookable>>;
  bookingRequest?: Maybe<BookingRequest>;
  bookingRequests?: Maybe<Array<BookingRequest>>;
  committees?: Maybe<CommitteePagination>;
  door?: Maybe<Door>;
  doors?: Maybe<Array<Door>>;
  event?: Maybe<Event>;
  events?: Maybe<EventPagination>;
  files?: Maybe<Array<FileData>>;
  mandates?: Maybe<MandatePagination>;
  me?: Maybe<Member>;
  memberById?: Maybe<Member>;
  memberByStudentId?: Maybe<Member>;
  members?: Maybe<MemberPagination>;
  news?: Maybe<ArticlePagination>;
  positions?: Maybe<PositionPagination>;
  presignedPutUrl?: Maybe<Scalars['String']>;
};


export type QueryAccessPolicyArgs = {
  name: Scalars['String'];
};


export type QueryArticleArgs = {
  id: Scalars['UUID'];
};


export type QueryBookingRequestArgs = {
  id: Scalars['UUID'];
};


export type QueryBookingRequestsArgs = {
  filter?: Maybe<BookingFilter>;
};


export type QueryCommitteesArgs = {
  filter?: Maybe<CommitteeFilter>;
  page?: Scalars['Int'];
  perPage?: Scalars['Int'];
};


export type QueryDoorArgs = {
  name: Scalars['String'];
};


export type QueryEventArgs = {
  id: Scalars['UUID'];
};


export type QueryEventsArgs = {
  filter?: Maybe<EventFilter>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


export type QueryFilesArgs = {
  bucket: Scalars['String'];
  prefix: Scalars['String'];
};


export type QueryMandatesArgs = {
  filter?: Maybe<MandateFilter>;
  page?: Scalars['Int'];
  perPage?: Scalars['Int'];
};


export type QueryMemberByIdArgs = {
  id: Scalars['UUID'];
};


export type QueryMemberByStudentIdArgs = {
  student_id: Scalars['String'];
};


export type QueryMembersArgs = {
  filter?: Maybe<MemberFilter>;
  page?: Scalars['Int'];
  perPage?: Scalars['Int'];
};


export type QueryNewsArgs = {
  page?: Scalars['Int'];
  perPage?: Scalars['Int'];
};


export type QueryPositionsArgs = {
  filter?: Maybe<PositionFilter>;
  page?: Scalars['Int'];
  perPage?: Scalars['Int'];
};


export type QueryPresignedPutUrlArgs = {
  bucket: Scalars['String'];
  fileName: Scalars['String'];
};

export type RemoveArticlePayload = {
  __typename?: 'RemoveArticlePayload';
  article: Article;
};


export type UpdateArticle = {
  body?: Maybe<Scalars['String']>;
  bodyEn?: Maybe<Scalars['String']>;
  header?: Maybe<Scalars['String']>;
  headerEn?: Maybe<Scalars['String']>;
  imageName?: Maybe<Scalars['String']>;
};

export type UpdateArticlePayload = {
  __typename?: 'UpdateArticlePayload';
  article: Article;
  uploadUrl?: Maybe<Scalars['Url']>;
};

export type UpdateBookingRequest = {
  end?: Maybe<Scalars['Datetime']>;
  event?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Datetime']>;
  what?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UpdateBookingRequestStatus = {
  status?: Maybe<BookingStatus>;
};

export type UpdateCommittee = {
  name?: Maybe<Scalars['String']>;
};

export type UpdateEvent = {
  description?: Maybe<Scalars['String']>;
  description_en?: Maybe<Scalars['String']>;
  end_datetime?: Maybe<Scalars['Datetime']>;
  link?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  organizer?: Maybe<Scalars['String']>;
  short_description?: Maybe<Scalars['String']>;
  short_description_en?: Maybe<Scalars['String']>;
  start_datetime?: Maybe<Scalars['Datetime']>;
  title?: Maybe<Scalars['String']>;
  title_en?: Maybe<Scalars['String']>;
};

export type UpdateMandate = {
  end_date?: Maybe<Scalars['Date']>;
  member_id?: Maybe<Scalars['UUID']>;
  position_id?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['Date']>;
};

export type UpdateMember = {
  class_programme?: Maybe<Scalars['String']>;
  class_year?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  picture_path?: Maybe<Scalars['String']>;
};

export type UpdatePosition = {
  committee_id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
};


export type FileChange = {
  __typename?: 'fileChange';
  file: FileData;
  oldFile?: Maybe<FileData>;
};

export type ApiAccessQueryVariables = Exact<{ [key: string]: never; }>;


export type ApiAccessQuery = (
  { __typename?: 'Query' }
  & { apiAccess?: Maybe<Array<(
    { __typename?: 'Api' }
    & Pick<Api, 'name'>
  )>> }
);

export type GetBookablesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBookablesQuery = (
  { __typename?: 'Query' }
  & { bookables?: Maybe<Array<(
    { __typename?: 'Bookable' }
    & Pick<Bookable, 'id' | 'name' | 'name_en'>
  )>> }
);

export type GetBookingsQueryVariables = Exact<{
  from?: Maybe<Scalars['Datetime']>;
  to?: Maybe<Scalars['Datetime']>;
  status?: Maybe<BookingStatus>;
}>;


export type GetBookingsQuery = (
  { __typename?: 'Query' }
  & { bookingRequests?: Maybe<Array<(
    { __typename?: 'BookingRequest' }
    & Pick<BookingRequest, 'id' | 'start' | 'end' | 'event' | 'status' | 'created' | 'last_modified'>
    & { booker: (
      { __typename?: 'Member' }
      & Pick<Member, 'id' | 'first_name' | 'nickname' | 'last_name'>
    ), what: Array<Maybe<(
      { __typename?: 'Bookable' }
      & Pick<Bookable, 'id' | 'name' | 'name_en'>
    )>> }
  )>> }
);

export type CreateBookingRequestMutationVariables = Exact<{
  bookerId: Scalars['UUID'];
  start: Scalars['Datetime'];
  end: Scalars['Datetime'];
  what: Array<Scalars['String']> | Scalars['String'];
  event: Scalars['String'];
}>;


export type CreateBookingRequestMutation = (
  { __typename?: 'Mutation' }
  & { bookingRequest?: Maybe<(
    { __typename?: 'BookingRequestMutations' }
    & { create?: Maybe<(
      { __typename?: 'BookingRequest' }
      & Pick<BookingRequest, 'start' | 'end' | 'event'>
      & { what: Array<Maybe<(
        { __typename?: 'Bookable' }
        & Pick<Bookable, 'id' | 'name' | 'name_en'>
      )>> }
    )> }
  )> }
);

export type AcceptBookingRequestMutationVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type AcceptBookingRequestMutation = (
  { __typename?: 'Mutation' }
  & { bookingRequest?: Maybe<(
    { __typename?: 'BookingRequestMutations' }
    & Pick<BookingRequestMutations, 'accept'>
  )> }
);

export type DenyBookingRequestMutationVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type DenyBookingRequestMutation = (
  { __typename?: 'Mutation' }
  & { bookingRequest?: Maybe<(
    { __typename?: 'BookingRequestMutations' }
    & Pick<BookingRequestMutations, 'deny'>
  )> }
);

export type GetCommitteesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCommitteesQuery = (
  { __typename?: 'Query' }
  & { committees?: Maybe<(
    { __typename?: 'CommitteePagination' }
    & { committees: Array<Maybe<(
      { __typename?: 'Committee' }
      & Pick<Committee, 'id' | 'name'>
    )>> }
  )> }
);

export type EventsQueryVariables = Exact<{
  start_datetime?: Maybe<Scalars['Datetime']>;
  end_datetime?: Maybe<Scalars['Datetime']>;
}>;


export type EventsQuery = (
  { __typename?: 'Query' }
  & { events?: Maybe<(
    { __typename?: 'EventPagination' }
    & { events: Array<Maybe<(
      { __typename?: 'Event' }
      & Pick<Event, 'title' | 'id' | 'short_description' | 'description' | 'start_datetime' | 'end_datetime' | 'link' | 'location' | 'organizer' | 'title_en' | 'description_en' | 'short_description_en'>
    )>> }
  )> }
);

export type EventQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type EventQuery = (
  { __typename?: 'Query' }
  & { event?: Maybe<(
    { __typename?: 'Event' }
    & Pick<Event, 'title' | 'id' | 'short_description' | 'description' | 'start_datetime' | 'end_datetime' | 'link' | 'location' | 'organizer' | 'title_en' | 'description_en' | 'short_description_en'>
  )> }
);

export type UpdateEventMutationVariables = Exact<{
  id: Scalars['UUID'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  short_description?: Maybe<Scalars['String']>;
  start_datetime?: Maybe<Scalars['Datetime']>;
  end_datetime?: Maybe<Scalars['Datetime']>;
  link?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  organizer?: Maybe<Scalars['String']>;
  title_en?: Maybe<Scalars['String']>;
  description_en?: Maybe<Scalars['String']>;
  short_description_en?: Maybe<Scalars['String']>;
}>;


export type UpdateEventMutation = (
  { __typename?: 'Mutation' }
  & { event?: Maybe<(
    { __typename?: 'EventMutations' }
    & { update?: Maybe<(
      { __typename?: 'Event' }
      & Pick<Event, 'title' | 'id' | 'short_description' | 'description' | 'start_datetime' | 'end_datetime' | 'link' | 'location' | 'organizer' | 'title_en' | 'description_en' | 'short_description_en'>
    )> }
  )> }
);

export type CreateEventMutationVariables = Exact<{
  title: Scalars['String'];
  description: Scalars['String'];
  short_description: Scalars['String'];
  start_datetime: Scalars['Datetime'];
  end_datetime: Scalars['Datetime'];
  link?: Maybe<Scalars['String']>;
  location: Scalars['String'];
  organizer: Scalars['String'];
  title_en?: Maybe<Scalars['String']>;
  description_en?: Maybe<Scalars['String']>;
  short_description_en?: Maybe<Scalars['String']>;
}>;


export type CreateEventMutation = (
  { __typename?: 'Mutation' }
  & { event?: Maybe<(
    { __typename?: 'EventMutations' }
    & { create?: Maybe<(
      { __typename?: 'Event' }
      & Pick<Event, 'title' | 'id' | 'short_description' | 'description' | 'start_datetime' | 'end_datetime' | 'link' | 'location' | 'organizer' | 'title_en' | 'description_en' | 'short_description_en'>
    )> }
  )> }
);

export type RemoveEventMutationVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type RemoveEventMutation = (
  { __typename?: 'Mutation' }
  & { event?: Maybe<(
    { __typename?: 'EventMutations' }
    & { remove?: Maybe<(
      { __typename?: 'Event' }
      & Pick<Event, 'id'>
    )> }
  )> }
);

export type FilesQueryVariables = Exact<{
  bucket: Scalars['String'];
  prefix: Scalars['String'];
}>;


export type FilesQuery = (
  { __typename?: 'Query' }
  & { files?: Maybe<Array<(
    { __typename?: 'FileData' }
    & Pick<FileData, 'id' | 'name' | 'size' | 'isDir' | 'thumbnailUrl'>
  )>> }
);

export type PresignedPutUrlQueryVariables = Exact<{
  bucket: Scalars['String'];
  fileName: Scalars['String'];
}>;


export type PresignedPutUrlQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'presignedPutUrl'>
);

export type RemoveObjectsMutationVariables = Exact<{
  bucket: Scalars['String'];
  fileNames: Array<Scalars['String']> | Scalars['String'];
}>;


export type RemoveObjectsMutation = (
  { __typename?: 'Mutation' }
  & { files?: Maybe<(
    { __typename?: 'FileMutations' }
    & { remove?: Maybe<Array<Maybe<(
      { __typename?: 'FileData' }
      & Pick<FileData, 'id' | 'name'>
    )>>> }
  )> }
);

export type MoveObjectsMutationVariables = Exact<{
  bucket: Scalars['String'];
  fileNames: Array<Scalars['String']> | Scalars['String'];
  destination: Scalars['String'];
}>;


export type MoveObjectsMutation = (
  { __typename?: 'Mutation' }
  & { files?: Maybe<(
    { __typename?: 'FileMutations' }
    & { move?: Maybe<Array<Maybe<(
      { __typename?: 'fileChange' }
      & { file: (
        { __typename?: 'FileData' }
        & Pick<FileData, 'id' | 'name' | 'size' | 'isDir' | 'thumbnailUrl'>
      ), oldFile?: Maybe<(
        { __typename?: 'FileData' }
        & Pick<FileData, 'id' | 'name' | 'size' | 'isDir' | 'thumbnailUrl'>
      )> }
    )>>> }
  )> }
);

export type RenameObjectMutationVariables = Exact<{
  bucket: Scalars['String'];
  fileName: Scalars['String'];
  newFileName: Scalars['String'];
}>;


export type RenameObjectMutation = (
  { __typename?: 'Mutation' }
  & { files?: Maybe<(
    { __typename?: 'FileMutations' }
    & { rename?: Maybe<(
      { __typename?: 'fileChange' }
      & { file: (
        { __typename?: 'FileData' }
        & Pick<FileData, 'id' | 'name' | 'size' | 'isDir' | 'thumbnailUrl'>
      ) }
    )> }
  )> }
);

export type GetMandatesByPeriodQueryVariables = Exact<{
  page: Scalars['Int'];
  perPage: Scalars['Int'];
  start_date?: Maybe<Scalars['Date']>;
  end_date?: Maybe<Scalars['Date']>;
}>;


export type GetMandatesByPeriodQuery = (
  { __typename?: 'Query' }
  & { mandates?: Maybe<(
    { __typename?: 'MandatePagination' }
    & { mandates: Array<Maybe<(
      { __typename?: 'Mandate' }
      & Pick<Mandate, 'id' | 'start_date' | 'end_date'>
      & { position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'name' | 'nameEn' | 'id'>
      )>, member?: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'id' | 'first_name' | 'last_name'>
      )> }
    )>>, pageInfo: (
      { __typename?: 'PaginationInfo' }
      & Pick<PaginationInfo, 'totalPages'>
    ) }
  )> }
);

export type CreateMandateMutationVariables = Exact<{
  memberId: Scalars['UUID'];
  positionId: Scalars['String'];
  startDate: Scalars['Date'];
  endDate: Scalars['Date'];
}>;


export type CreateMandateMutation = (
  { __typename?: 'Mutation' }
  & { mandate?: Maybe<(
    { __typename?: 'MandateMutations' }
    & { create?: Maybe<(
      { __typename?: 'Mandate' }
      & Pick<Mandate, 'id'>
    )> }
  )> }
);

export type RemoveMandateMutationVariables = Exact<{
  mandateId: Scalars['UUID'];
}>;


export type RemoveMandateMutation = (
  { __typename?: 'Mutation' }
  & { mandate?: Maybe<(
    { __typename?: 'MandateMutations' }
    & { remove?: Maybe<(
      { __typename?: 'Mandate' }
      & Pick<Mandate, 'id'>
    )> }
  )> }
);

export type MeHeaderQueryVariables = Exact<{ [key: string]: never; }>;


export type MeHeaderQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'Member' }
    & Pick<Member, 'id' | 'first_name' | 'nickname' | 'last_name' | 'student_id' | 'picture_path'>
  )> }
);

export type GetMembersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMembersQuery = (
  { __typename?: 'Query' }
  & { members?: Maybe<(
    { __typename?: 'MemberPagination' }
    & { members: Array<Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'id' | 'first_name' | 'nickname' | 'last_name' | 'student_id'>
    )>> }
  )> }
);

export type MemberPageQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type MemberPageQuery = (
  { __typename?: 'Query' }
  & { memberById?: Maybe<(
    { __typename?: 'Member' }
    & Pick<Member, 'id' | 'first_name' | 'nickname' | 'last_name' | 'student_id' | 'class_programme' | 'class_year' | 'picture_path'>
  )> }
);

export type CreateMemberMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  classProgramme: Scalars['String'];
  classYear: Scalars['Int'];
  studentId: Scalars['String'];
}>;


export type CreateMemberMutation = (
  { __typename?: 'Mutation' }
  & { member?: Maybe<(
    { __typename?: 'MemberMutations' }
    & { create?: Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'id' | 'first_name' | 'last_name' | 'class_programme' | 'class_year' | 'student_id'>
    )> }
  )> }
);

export type UpdateMemberMutationVariables = Exact<{
  id: Scalars['UUID'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  classProgramme?: Maybe<Scalars['String']>;
  classYear?: Maybe<Scalars['Int']>;
  picturePath?: Maybe<Scalars['String']>;
}>;


export type UpdateMemberMutation = (
  { __typename?: 'Mutation' }
  & { member?: Maybe<(
    { __typename?: 'MemberMutations' }
    & { update?: Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'first_name' | 'last_name' | 'nickname' | 'class_programme' | 'class_year' | 'picture_path'>
    )> }
  )> }
);

export type NewsPageQueryVariables = Exact<{
  page_number: Scalars['Int'];
  per_page: Scalars['Int'];
}>;


export type NewsPageQuery = (
  { __typename?: 'Query' }
  & { news?: Maybe<(
    { __typename?: 'ArticlePagination' }
    & { articles: Array<Maybe<(
      { __typename?: 'Article' }
      & Pick<Article, 'id' | 'header' | 'headerEn' | 'body' | 'bodyEn' | 'imageUrl' | 'publishedDatetime' | 'latestEditDatetime'>
      & { author: (
        { __typename?: 'Member' }
        & Pick<Member, 'id' | 'first_name' | 'nickname' | 'last_name'>
      ) }
    )>>, pageInfo: (
      { __typename?: 'PaginationInfo' }
      & Pick<PaginationInfo, 'totalPages'>
    ) }
  )> }
);

export type NewsPageInfoQueryVariables = Exact<{
  page_number: Scalars['Int'];
  per_page: Scalars['Int'];
}>;


export type NewsPageInfoQuery = (
  { __typename?: 'Query' }
  & { news?: Maybe<(
    { __typename?: 'ArticlePagination' }
    & { pageInfo: (
      { __typename?: 'PaginationInfo' }
      & Pick<PaginationInfo, 'totalPages' | 'totalItems' | 'hasNextPage' | 'hasPreviousPage'>
    ) }
  )> }
);

export type ArticleQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type ArticleQuery = (
  { __typename?: 'Query' }
  & { article?: Maybe<(
    { __typename?: 'Article' }
    & Pick<Article, 'id' | 'body' | 'bodyEn' | 'header' | 'headerEn' | 'imageUrl' | 'publishedDatetime'>
    & { author: (
      { __typename?: 'Member' }
      & Pick<Member, 'id' | 'first_name' | 'nickname' | 'last_name'>
    ) }
  )> }
);

export type UpdateArticleMutationVariables = Exact<{
  id: Scalars['UUID'];
  header?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  headerEn?: Maybe<Scalars['String']>;
  bodyEn?: Maybe<Scalars['String']>;
  imageName?: Maybe<Scalars['String']>;
}>;


export type UpdateArticleMutation = (
  { __typename?: 'Mutation' }
  & { article?: Maybe<(
    { __typename?: 'ArticleMutations' }
    & { update?: Maybe<(
      { __typename?: 'UpdateArticlePayload' }
      & Pick<UpdateArticlePayload, 'uploadUrl'>
      & { article: (
        { __typename?: 'Article' }
        & Pick<Article, 'id' | 'header' | 'body' | 'headerEn' | 'bodyEn' | 'imageUrl'>
      ) }
    )> }
  )> }
);

export type CreateArticleMutationVariables = Exact<{
  header: Scalars['String'];
  body: Scalars['String'];
  headerEn: Scalars['String'];
  bodyEn: Scalars['String'];
  imageName?: Maybe<Scalars['String']>;
}>;


export type CreateArticleMutation = (
  { __typename?: 'Mutation' }
  & { article?: Maybe<(
    { __typename?: 'ArticleMutations' }
    & { create?: Maybe<(
      { __typename?: 'CreateArticlePayload' }
      & Pick<CreateArticlePayload, 'uploadUrl'>
      & { article: (
        { __typename?: 'Article' }
        & Pick<Article, 'id' | 'header' | 'body' | 'headerEn' | 'bodyEn' | 'imageUrl'>
      ) }
    )> }
  )> }
);

export type RemoveArticleMutationVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type RemoveArticleMutation = (
  { __typename?: 'Mutation' }
  & { article?: Maybe<(
    { __typename?: 'ArticleMutations' }
    & { remove?: Maybe<(
      { __typename?: 'RemoveArticlePayload' }
      & { article: (
        { __typename?: 'Article' }
        & Pick<Article, 'id'>
      ) }
    )> }
  )> }
);

export type GetPresignedPutUrlMutationVariables = Exact<{
  fileName: Scalars['String'];
}>;


export type GetPresignedPutUrlMutation = (
  { __typename?: 'Mutation' }
  & { article?: Maybe<(
    { __typename?: 'ArticleMutations' }
    & Pick<ArticleMutations, 'presignedPutUrl'>
  )> }
);

export type GetPositionsQueryVariables = Exact<{
  committeeId?: Maybe<Scalars['UUID']>;
}>;


export type GetPositionsQuery = (
  { __typename?: 'Query' }
  & { positions?: Maybe<(
    { __typename?: 'PositionPagination' }
    & { positions: Array<Maybe<(
      { __typename?: 'Position' }
      & Pick<Position, 'id' | 'name' | 'nameEn'>
      & { committee?: Maybe<(
        { __typename?: 'Committee' }
        & Pick<Committee, 'name'>
      )> }
    )>>, pageInfo: (
      { __typename?: 'PaginationInfo' }
      & Pick<PaginationInfo, 'hasNextPage'>
    ) }
  )> }
);


export const ApiAccessDocument = gql`
    query ApiAccess {
  apiAccess {
    name
  }
}
    `;

/**
 * __useApiAccessQuery__
 *
 * To run a query within a React component, call `useApiAccessQuery` and pass it any options that fit your needs.
 * When your component renders, `useApiAccessQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApiAccessQuery({
 *   variables: {
 *   },
 * });
 */
export function useApiAccessQuery(baseOptions?: Apollo.QueryHookOptions<ApiAccessQuery, ApiAccessQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ApiAccessQuery, ApiAccessQueryVariables>(ApiAccessDocument, options);
      }
export function useApiAccessLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ApiAccessQuery, ApiAccessQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ApiAccessQuery, ApiAccessQueryVariables>(ApiAccessDocument, options);
        }
export type ApiAccessQueryHookResult = ReturnType<typeof useApiAccessQuery>;
export type ApiAccessLazyQueryHookResult = ReturnType<typeof useApiAccessLazyQuery>;
export type ApiAccessQueryResult = Apollo.QueryResult<ApiAccessQuery, ApiAccessQueryVariables>;
export const GetBookablesDocument = gql`
    query GetBookables {
  bookables {
    id
    name
    name_en
  }
}
    `;

/**
 * __useGetBookablesQuery__
 *
 * To run a query within a React component, call `useGetBookablesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBookablesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBookablesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBookablesQuery(baseOptions?: Apollo.QueryHookOptions<GetBookablesQuery, GetBookablesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBookablesQuery, GetBookablesQueryVariables>(GetBookablesDocument, options);
      }
export function useGetBookablesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBookablesQuery, GetBookablesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBookablesQuery, GetBookablesQueryVariables>(GetBookablesDocument, options);
        }
export type GetBookablesQueryHookResult = ReturnType<typeof useGetBookablesQuery>;
export type GetBookablesLazyQueryHookResult = ReturnType<typeof useGetBookablesLazyQuery>;
export type GetBookablesQueryResult = Apollo.QueryResult<GetBookablesQuery, GetBookablesQueryVariables>;
export const GetBookingsDocument = gql`
    query GetBookings($from: Datetime, $to: Datetime, $status: BookingStatus) {
  bookingRequests(filter: {from: $from, to: $to, status: $status}) {
    id
    start
    end
    event
    booker {
      id
      first_name
      nickname
      last_name
    }
    what {
      id
      name
      name_en
    }
    status
    created
    last_modified
  }
}
    `;

/**
 * __useGetBookingsQuery__
 *
 * To run a query within a React component, call `useGetBookingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBookingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBookingsQuery({
 *   variables: {
 *      from: // value for 'from'
 *      to: // value for 'to'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useGetBookingsQuery(baseOptions?: Apollo.QueryHookOptions<GetBookingsQuery, GetBookingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBookingsQuery, GetBookingsQueryVariables>(GetBookingsDocument, options);
      }
export function useGetBookingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBookingsQuery, GetBookingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBookingsQuery, GetBookingsQueryVariables>(GetBookingsDocument, options);
        }
export type GetBookingsQueryHookResult = ReturnType<typeof useGetBookingsQuery>;
export type GetBookingsLazyQueryHookResult = ReturnType<typeof useGetBookingsLazyQuery>;
export type GetBookingsQueryResult = Apollo.QueryResult<GetBookingsQuery, GetBookingsQueryVariables>;
export const CreateBookingRequestDocument = gql`
    mutation CreateBookingRequest($bookerId: UUID!, $start: Datetime!, $end: Datetime!, $what: [String!]!, $event: String!) {
  bookingRequest {
    create(
      input: {start: $start, end: $end, what: $what, event: $event, booker_id: $bookerId}
    ) {
      start
      end
      what {
        id
        name
        name_en
      }
      event
    }
  }
}
    `;
export type CreateBookingRequestMutationFn = Apollo.MutationFunction<CreateBookingRequestMutation, CreateBookingRequestMutationVariables>;

/**
 * __useCreateBookingRequestMutation__
 *
 * To run a mutation, you first call `useCreateBookingRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookingRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookingRequestMutation, { data, loading, error }] = useCreateBookingRequestMutation({
 *   variables: {
 *      bookerId: // value for 'bookerId'
 *      start: // value for 'start'
 *      end: // value for 'end'
 *      what: // value for 'what'
 *      event: // value for 'event'
 *   },
 * });
 */
export function useCreateBookingRequestMutation(baseOptions?: Apollo.MutationHookOptions<CreateBookingRequestMutation, CreateBookingRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBookingRequestMutation, CreateBookingRequestMutationVariables>(CreateBookingRequestDocument, options);
      }
export type CreateBookingRequestMutationHookResult = ReturnType<typeof useCreateBookingRequestMutation>;
export type CreateBookingRequestMutationResult = Apollo.MutationResult<CreateBookingRequestMutation>;
export type CreateBookingRequestMutationOptions = Apollo.BaseMutationOptions<CreateBookingRequestMutation, CreateBookingRequestMutationVariables>;
export const AcceptBookingRequestDocument = gql`
    mutation acceptBookingRequest($id: UUID!) {
  bookingRequest {
    accept(id: $id)
  }
}
    `;
export type AcceptBookingRequestMutationFn = Apollo.MutationFunction<AcceptBookingRequestMutation, AcceptBookingRequestMutationVariables>;

/**
 * __useAcceptBookingRequestMutation__
 *
 * To run a mutation, you first call `useAcceptBookingRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcceptBookingRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acceptBookingRequestMutation, { data, loading, error }] = useAcceptBookingRequestMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAcceptBookingRequestMutation(baseOptions?: Apollo.MutationHookOptions<AcceptBookingRequestMutation, AcceptBookingRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AcceptBookingRequestMutation, AcceptBookingRequestMutationVariables>(AcceptBookingRequestDocument, options);
      }
export type AcceptBookingRequestMutationHookResult = ReturnType<typeof useAcceptBookingRequestMutation>;
export type AcceptBookingRequestMutationResult = Apollo.MutationResult<AcceptBookingRequestMutation>;
export type AcceptBookingRequestMutationOptions = Apollo.BaseMutationOptions<AcceptBookingRequestMutation, AcceptBookingRequestMutationVariables>;
export const DenyBookingRequestDocument = gql`
    mutation denyBookingRequest($id: UUID!) {
  bookingRequest {
    deny(id: $id)
  }
}
    `;
export type DenyBookingRequestMutationFn = Apollo.MutationFunction<DenyBookingRequestMutation, DenyBookingRequestMutationVariables>;

/**
 * __useDenyBookingRequestMutation__
 *
 * To run a mutation, you first call `useDenyBookingRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDenyBookingRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [denyBookingRequestMutation, { data, loading, error }] = useDenyBookingRequestMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDenyBookingRequestMutation(baseOptions?: Apollo.MutationHookOptions<DenyBookingRequestMutation, DenyBookingRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DenyBookingRequestMutation, DenyBookingRequestMutationVariables>(DenyBookingRequestDocument, options);
      }
export type DenyBookingRequestMutationHookResult = ReturnType<typeof useDenyBookingRequestMutation>;
export type DenyBookingRequestMutationResult = Apollo.MutationResult<DenyBookingRequestMutation>;
export type DenyBookingRequestMutationOptions = Apollo.BaseMutationOptions<DenyBookingRequestMutation, DenyBookingRequestMutationVariables>;
export const GetCommitteesDocument = gql`
    query GetCommittees {
  committees(perPage: 50) {
    committees {
      id
      name
    }
  }
}
    `;

/**
 * __useGetCommitteesQuery__
 *
 * To run a query within a React component, call `useGetCommitteesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommitteesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommitteesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCommitteesQuery(baseOptions?: Apollo.QueryHookOptions<GetCommitteesQuery, GetCommitteesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCommitteesQuery, GetCommitteesQueryVariables>(GetCommitteesDocument, options);
      }
export function useGetCommitteesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommitteesQuery, GetCommitteesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCommitteesQuery, GetCommitteesQueryVariables>(GetCommitteesDocument, options);
        }
export type GetCommitteesQueryHookResult = ReturnType<typeof useGetCommitteesQuery>;
export type GetCommitteesLazyQueryHookResult = ReturnType<typeof useGetCommitteesLazyQuery>;
export type GetCommitteesQueryResult = Apollo.QueryResult<GetCommitteesQuery, GetCommitteesQueryVariables>;
export const EventsDocument = gql`
    query Events($start_datetime: Datetime, $end_datetime: Datetime) {
  events(filter: {start_datetime: $start_datetime, end_datetime: $end_datetime}) {
    events {
      title
      id
      short_description
      description
      start_datetime
      end_datetime
      link
      location
      organizer
      title_en
      description_en
      short_description_en
    }
  }
}
    `;

/**
 * __useEventsQuery__
 *
 * To run a query within a React component, call `useEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventsQuery({
 *   variables: {
 *      start_datetime: // value for 'start_datetime'
 *      end_datetime: // value for 'end_datetime'
 *   },
 * });
 */
export function useEventsQuery(baseOptions?: Apollo.QueryHookOptions<EventsQuery, EventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EventsQuery, EventsQueryVariables>(EventsDocument, options);
      }
export function useEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventsQuery, EventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EventsQuery, EventsQueryVariables>(EventsDocument, options);
        }
export type EventsQueryHookResult = ReturnType<typeof useEventsQuery>;
export type EventsLazyQueryHookResult = ReturnType<typeof useEventsLazyQuery>;
export type EventsQueryResult = Apollo.QueryResult<EventsQuery, EventsQueryVariables>;
export const EventDocument = gql`
    query Event($id: UUID!) {
  event(id: $id) {
    title
    id
    short_description
    description
    start_datetime
    end_datetime
    link
    location
    organizer
    title_en
    description_en
    short_description_en
  }
}
    `;

/**
 * __useEventQuery__
 *
 * To run a query within a React component, call `useEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useEventQuery(baseOptions: Apollo.QueryHookOptions<EventQuery, EventQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EventQuery, EventQueryVariables>(EventDocument, options);
      }
export function useEventLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventQuery, EventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EventQuery, EventQueryVariables>(EventDocument, options);
        }
export type EventQueryHookResult = ReturnType<typeof useEventQuery>;
export type EventLazyQueryHookResult = ReturnType<typeof useEventLazyQuery>;
export type EventQueryResult = Apollo.QueryResult<EventQuery, EventQueryVariables>;
export const UpdateEventDocument = gql`
    mutation UpdateEvent($id: UUID!, $title: String, $description: String, $short_description: String, $start_datetime: Datetime, $end_datetime: Datetime, $link: String, $location: String, $organizer: String, $title_en: String, $description_en: String, $short_description_en: String) {
  event {
    update(
      id: $id
      input: {title: $title, description: $description, short_description: $short_description, start_datetime: $start_datetime, end_datetime: $end_datetime, link: $link, location: $location, organizer: $organizer, title_en: $title_en, description_en: $description_en, short_description_en: $short_description_en}
    ) {
      title
      id
      short_description
      description
      start_datetime
      end_datetime
      link
      location
      organizer
      title_en
      description_en
      short_description_en
    }
  }
}
    `;
export type UpdateEventMutationFn = Apollo.MutationFunction<UpdateEventMutation, UpdateEventMutationVariables>;

/**
 * __useUpdateEventMutation__
 *
 * To run a mutation, you first call `useUpdateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEventMutation, { data, loading, error }] = useUpdateEventMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      short_description: // value for 'short_description'
 *      start_datetime: // value for 'start_datetime'
 *      end_datetime: // value for 'end_datetime'
 *      link: // value for 'link'
 *      location: // value for 'location'
 *      organizer: // value for 'organizer'
 *      title_en: // value for 'title_en'
 *      description_en: // value for 'description_en'
 *      short_description_en: // value for 'short_description_en'
 *   },
 * });
 */
export function useUpdateEventMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEventMutation, UpdateEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEventMutation, UpdateEventMutationVariables>(UpdateEventDocument, options);
      }
export type UpdateEventMutationHookResult = ReturnType<typeof useUpdateEventMutation>;
export type UpdateEventMutationResult = Apollo.MutationResult<UpdateEventMutation>;
export type UpdateEventMutationOptions = Apollo.BaseMutationOptions<UpdateEventMutation, UpdateEventMutationVariables>;
export const CreateEventDocument = gql`
    mutation CreateEvent($title: String!, $description: String!, $short_description: String!, $start_datetime: Datetime!, $end_datetime: Datetime!, $link: String, $location: String!, $organizer: String!, $title_en: String, $description_en: String, $short_description_en: String) {
  event {
    create(
      input: {title: $title, description: $description, short_description: $short_description, start_datetime: $start_datetime, end_datetime: $end_datetime, link: $link, location: $location, organizer: $organizer, title_en: $title_en, description_en: $description_en, short_description_en: $short_description_en}
    ) {
      title
      id
      short_description
      description
      start_datetime
      end_datetime
      link
      location
      organizer
      title_en
      description_en
      short_description_en
    }
  }
}
    `;
export type CreateEventMutationFn = Apollo.MutationFunction<CreateEventMutation, CreateEventMutationVariables>;

/**
 * __useCreateEventMutation__
 *
 * To run a mutation, you first call `useCreateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEventMutation, { data, loading, error }] = useCreateEventMutation({
 *   variables: {
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      short_description: // value for 'short_description'
 *      start_datetime: // value for 'start_datetime'
 *      end_datetime: // value for 'end_datetime'
 *      link: // value for 'link'
 *      location: // value for 'location'
 *      organizer: // value for 'organizer'
 *      title_en: // value for 'title_en'
 *      description_en: // value for 'description_en'
 *      short_description_en: // value for 'short_description_en'
 *   },
 * });
 */
export function useCreateEventMutation(baseOptions?: Apollo.MutationHookOptions<CreateEventMutation, CreateEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEventMutation, CreateEventMutationVariables>(CreateEventDocument, options);
      }
export type CreateEventMutationHookResult = ReturnType<typeof useCreateEventMutation>;
export type CreateEventMutationResult = Apollo.MutationResult<CreateEventMutation>;
export type CreateEventMutationOptions = Apollo.BaseMutationOptions<CreateEventMutation, CreateEventMutationVariables>;
export const RemoveEventDocument = gql`
    mutation RemoveEvent($id: UUID!) {
  event {
    remove(id: $id) {
      id
    }
  }
}
    `;
export type RemoveEventMutationFn = Apollo.MutationFunction<RemoveEventMutation, RemoveEventMutationVariables>;

/**
 * __useRemoveEventMutation__
 *
 * To run a mutation, you first call `useRemoveEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeEventMutation, { data, loading, error }] = useRemoveEventMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveEventMutation(baseOptions?: Apollo.MutationHookOptions<RemoveEventMutation, RemoveEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveEventMutation, RemoveEventMutationVariables>(RemoveEventDocument, options);
      }
export type RemoveEventMutationHookResult = ReturnType<typeof useRemoveEventMutation>;
export type RemoveEventMutationResult = Apollo.MutationResult<RemoveEventMutation>;
export type RemoveEventMutationOptions = Apollo.BaseMutationOptions<RemoveEventMutation, RemoveEventMutationVariables>;
export const FilesDocument = gql`
    query files($bucket: String!, $prefix: String!) {
  files(bucket: $bucket, prefix: $prefix) {
    id
    name
    size
    isDir
    thumbnailUrl
  }
}
    `;

/**
 * __useFilesQuery__
 *
 * To run a query within a React component, call `useFilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilesQuery({
 *   variables: {
 *      bucket: // value for 'bucket'
 *      prefix: // value for 'prefix'
 *   },
 * });
 */
export function useFilesQuery(baseOptions: Apollo.QueryHookOptions<FilesQuery, FilesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FilesQuery, FilesQueryVariables>(FilesDocument, options);
      }
export function useFilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FilesQuery, FilesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FilesQuery, FilesQueryVariables>(FilesDocument, options);
        }
export type FilesQueryHookResult = ReturnType<typeof useFilesQuery>;
export type FilesLazyQueryHookResult = ReturnType<typeof useFilesLazyQuery>;
export type FilesQueryResult = Apollo.QueryResult<FilesQuery, FilesQueryVariables>;
export const PresignedPutUrlDocument = gql`
    query PresignedPutUrl($bucket: String!, $fileName: String!) {
  presignedPutUrl(bucket: $bucket, fileName: $fileName)
}
    `;

/**
 * __usePresignedPutUrlQuery__
 *
 * To run a query within a React component, call `usePresignedPutUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `usePresignedPutUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePresignedPutUrlQuery({
 *   variables: {
 *      bucket: // value for 'bucket'
 *      fileName: // value for 'fileName'
 *   },
 * });
 */
export function usePresignedPutUrlQuery(baseOptions: Apollo.QueryHookOptions<PresignedPutUrlQuery, PresignedPutUrlQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PresignedPutUrlQuery, PresignedPutUrlQueryVariables>(PresignedPutUrlDocument, options);
      }
export function usePresignedPutUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PresignedPutUrlQuery, PresignedPutUrlQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PresignedPutUrlQuery, PresignedPutUrlQueryVariables>(PresignedPutUrlDocument, options);
        }
export type PresignedPutUrlQueryHookResult = ReturnType<typeof usePresignedPutUrlQuery>;
export type PresignedPutUrlLazyQueryHookResult = ReturnType<typeof usePresignedPutUrlLazyQuery>;
export type PresignedPutUrlQueryResult = Apollo.QueryResult<PresignedPutUrlQuery, PresignedPutUrlQueryVariables>;
export const RemoveObjectsDocument = gql`
    mutation removeObjects($bucket: String!, $fileNames: [String!]!) {
  files {
    remove(bucket: $bucket, fileNames: $fileNames) {
      id
      name
    }
  }
}
    `;
export type RemoveObjectsMutationFn = Apollo.MutationFunction<RemoveObjectsMutation, RemoveObjectsMutationVariables>;

/**
 * __useRemoveObjectsMutation__
 *
 * To run a mutation, you first call `useRemoveObjectsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveObjectsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeObjectsMutation, { data, loading, error }] = useRemoveObjectsMutation({
 *   variables: {
 *      bucket: // value for 'bucket'
 *      fileNames: // value for 'fileNames'
 *   },
 * });
 */
export function useRemoveObjectsMutation(baseOptions?: Apollo.MutationHookOptions<RemoveObjectsMutation, RemoveObjectsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveObjectsMutation, RemoveObjectsMutationVariables>(RemoveObjectsDocument, options);
      }
export type RemoveObjectsMutationHookResult = ReturnType<typeof useRemoveObjectsMutation>;
export type RemoveObjectsMutationResult = Apollo.MutationResult<RemoveObjectsMutation>;
export type RemoveObjectsMutationOptions = Apollo.BaseMutationOptions<RemoveObjectsMutation, RemoveObjectsMutationVariables>;
export const MoveObjectsDocument = gql`
    mutation moveObjects($bucket: String!, $fileNames: [String!]!, $destination: String!) {
  files {
    move(bucket: $bucket, fileNames: $fileNames, newFolder: $destination) {
      file {
        id
        name
        size
        isDir
        thumbnailUrl
      }
      oldFile {
        id
        name
        size
        isDir
        thumbnailUrl
      }
    }
  }
}
    `;
export type MoveObjectsMutationFn = Apollo.MutationFunction<MoveObjectsMutation, MoveObjectsMutationVariables>;

/**
 * __useMoveObjectsMutation__
 *
 * To run a mutation, you first call `useMoveObjectsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMoveObjectsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [moveObjectsMutation, { data, loading, error }] = useMoveObjectsMutation({
 *   variables: {
 *      bucket: // value for 'bucket'
 *      fileNames: // value for 'fileNames'
 *      destination: // value for 'destination'
 *   },
 * });
 */
export function useMoveObjectsMutation(baseOptions?: Apollo.MutationHookOptions<MoveObjectsMutation, MoveObjectsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MoveObjectsMutation, MoveObjectsMutationVariables>(MoveObjectsDocument, options);
      }
export type MoveObjectsMutationHookResult = ReturnType<typeof useMoveObjectsMutation>;
export type MoveObjectsMutationResult = Apollo.MutationResult<MoveObjectsMutation>;
export type MoveObjectsMutationOptions = Apollo.BaseMutationOptions<MoveObjectsMutation, MoveObjectsMutationVariables>;
export const RenameObjectDocument = gql`
    mutation renameObject($bucket: String!, $fileName: String!, $newFileName: String!) {
  files {
    rename(bucket: $bucket, fileName: $fileName, newFileName: $newFileName) {
      file {
        id
        name
        size
        isDir
        thumbnailUrl
      }
    }
  }
}
    `;
export type RenameObjectMutationFn = Apollo.MutationFunction<RenameObjectMutation, RenameObjectMutationVariables>;

/**
 * __useRenameObjectMutation__
 *
 * To run a mutation, you first call `useRenameObjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRenameObjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [renameObjectMutation, { data, loading, error }] = useRenameObjectMutation({
 *   variables: {
 *      bucket: // value for 'bucket'
 *      fileName: // value for 'fileName'
 *      newFileName: // value for 'newFileName'
 *   },
 * });
 */
export function useRenameObjectMutation(baseOptions?: Apollo.MutationHookOptions<RenameObjectMutation, RenameObjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RenameObjectMutation, RenameObjectMutationVariables>(RenameObjectDocument, options);
      }
export type RenameObjectMutationHookResult = ReturnType<typeof useRenameObjectMutation>;
export type RenameObjectMutationResult = Apollo.MutationResult<RenameObjectMutation>;
export type RenameObjectMutationOptions = Apollo.BaseMutationOptions<RenameObjectMutation, RenameObjectMutationVariables>;
export const GetMandatesByPeriodDocument = gql`
    query GetMandatesByPeriod($page: Int!, $perPage: Int!, $start_date: Date, $end_date: Date) {
  mandates(
    page: $page
    perPage: $perPage
    filter: {start_date: $start_date, end_date: $end_date}
  ) {
    mandates {
      id
      start_date
      end_date
      position {
        name
        nameEn
        id
      }
      member {
        id
        first_name
        last_name
      }
    }
    pageInfo {
      totalPages
    }
  }
}
    `;

/**
 * __useGetMandatesByPeriodQuery__
 *
 * To run a query within a React component, call `useGetMandatesByPeriodQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMandatesByPeriodQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMandatesByPeriodQuery({
 *   variables: {
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *      start_date: // value for 'start_date'
 *      end_date: // value for 'end_date'
 *   },
 * });
 */
export function useGetMandatesByPeriodQuery(baseOptions: Apollo.QueryHookOptions<GetMandatesByPeriodQuery, GetMandatesByPeriodQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMandatesByPeriodQuery, GetMandatesByPeriodQueryVariables>(GetMandatesByPeriodDocument, options);
      }
export function useGetMandatesByPeriodLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMandatesByPeriodQuery, GetMandatesByPeriodQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMandatesByPeriodQuery, GetMandatesByPeriodQueryVariables>(GetMandatesByPeriodDocument, options);
        }
export type GetMandatesByPeriodQueryHookResult = ReturnType<typeof useGetMandatesByPeriodQuery>;
export type GetMandatesByPeriodLazyQueryHookResult = ReturnType<typeof useGetMandatesByPeriodLazyQuery>;
export type GetMandatesByPeriodQueryResult = Apollo.QueryResult<GetMandatesByPeriodQuery, GetMandatesByPeriodQueryVariables>;
export const CreateMandateDocument = gql`
    mutation CreateMandate($memberId: UUID!, $positionId: String!, $startDate: Date!, $endDate: Date!) {
  mandate {
    create(
      input: {member_id: $memberId, position_id: $positionId, start_date: $startDate, end_date: $endDate}
    ) {
      id
    }
  }
}
    `;
export type CreateMandateMutationFn = Apollo.MutationFunction<CreateMandateMutation, CreateMandateMutationVariables>;

/**
 * __useCreateMandateMutation__
 *
 * To run a mutation, you first call `useCreateMandateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMandateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMandateMutation, { data, loading, error }] = useCreateMandateMutation({
 *   variables: {
 *      memberId: // value for 'memberId'
 *      positionId: // value for 'positionId'
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *   },
 * });
 */
export function useCreateMandateMutation(baseOptions?: Apollo.MutationHookOptions<CreateMandateMutation, CreateMandateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMandateMutation, CreateMandateMutationVariables>(CreateMandateDocument, options);
      }
export type CreateMandateMutationHookResult = ReturnType<typeof useCreateMandateMutation>;
export type CreateMandateMutationResult = Apollo.MutationResult<CreateMandateMutation>;
export type CreateMandateMutationOptions = Apollo.BaseMutationOptions<CreateMandateMutation, CreateMandateMutationVariables>;
export const RemoveMandateDocument = gql`
    mutation RemoveMandate($mandateId: UUID!) {
  mandate {
    remove(id: $mandateId) {
      id
    }
  }
}
    `;
export type RemoveMandateMutationFn = Apollo.MutationFunction<RemoveMandateMutation, RemoveMandateMutationVariables>;

/**
 * __useRemoveMandateMutation__
 *
 * To run a mutation, you first call `useRemoveMandateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveMandateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeMandateMutation, { data, loading, error }] = useRemoveMandateMutation({
 *   variables: {
 *      mandateId: // value for 'mandateId'
 *   },
 * });
 */
export function useRemoveMandateMutation(baseOptions?: Apollo.MutationHookOptions<RemoveMandateMutation, RemoveMandateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveMandateMutation, RemoveMandateMutationVariables>(RemoveMandateDocument, options);
      }
export type RemoveMandateMutationHookResult = ReturnType<typeof useRemoveMandateMutation>;
export type RemoveMandateMutationResult = Apollo.MutationResult<RemoveMandateMutation>;
export type RemoveMandateMutationOptions = Apollo.BaseMutationOptions<RemoveMandateMutation, RemoveMandateMutationVariables>;
export const MeHeaderDocument = gql`
    query MeHeader {
  me {
    id
    first_name
    nickname
    last_name
    student_id
    picture_path
  }
}
    `;

/**
 * __useMeHeaderQuery__
 *
 * To run a query within a React component, call `useMeHeaderQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeHeaderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeHeaderQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeHeaderQuery(baseOptions?: Apollo.QueryHookOptions<MeHeaderQuery, MeHeaderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeHeaderQuery, MeHeaderQueryVariables>(MeHeaderDocument, options);
      }
export function useMeHeaderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeHeaderQuery, MeHeaderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeHeaderQuery, MeHeaderQueryVariables>(MeHeaderDocument, options);
        }
export type MeHeaderQueryHookResult = ReturnType<typeof useMeHeaderQuery>;
export type MeHeaderLazyQueryHookResult = ReturnType<typeof useMeHeaderLazyQuery>;
export type MeHeaderQueryResult = Apollo.QueryResult<MeHeaderQuery, MeHeaderQueryVariables>;
export const GetMembersDocument = gql`
    query GetMembers {
  members(perPage: 100) {
    members {
      id
      first_name
      nickname
      last_name
      student_id
    }
  }
}
    `;

/**
 * __useGetMembersQuery__
 *
 * To run a query within a React component, call `useGetMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMembersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMembersQuery(baseOptions?: Apollo.QueryHookOptions<GetMembersQuery, GetMembersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMembersQuery, GetMembersQueryVariables>(GetMembersDocument, options);
      }
export function useGetMembersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMembersQuery, GetMembersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMembersQuery, GetMembersQueryVariables>(GetMembersDocument, options);
        }
export type GetMembersQueryHookResult = ReturnType<typeof useGetMembersQuery>;
export type GetMembersLazyQueryHookResult = ReturnType<typeof useGetMembersLazyQuery>;
export type GetMembersQueryResult = Apollo.QueryResult<GetMembersQuery, GetMembersQueryVariables>;
export const MemberPageDocument = gql`
    query MemberPage($id: UUID!) {
  memberById(id: $id) {
    id
    first_name
    nickname
    last_name
    student_id
    class_programme
    class_year
    picture_path
  }
}
    `;

/**
 * __useMemberPageQuery__
 *
 * To run a query within a React component, call `useMemberPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useMemberPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMemberPageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMemberPageQuery(baseOptions: Apollo.QueryHookOptions<MemberPageQuery, MemberPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MemberPageQuery, MemberPageQueryVariables>(MemberPageDocument, options);
      }
export function useMemberPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MemberPageQuery, MemberPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MemberPageQuery, MemberPageQueryVariables>(MemberPageDocument, options);
        }
export type MemberPageQueryHookResult = ReturnType<typeof useMemberPageQuery>;
export type MemberPageLazyQueryHookResult = ReturnType<typeof useMemberPageLazyQuery>;
export type MemberPageQueryResult = Apollo.QueryResult<MemberPageQuery, MemberPageQueryVariables>;
export const CreateMemberDocument = gql`
    mutation CreateMember($firstName: String!, $lastName: String!, $classProgramme: String!, $classYear: Int!, $studentId: String!) {
  member {
    create(
      input: {first_name: $firstName, last_name: $lastName, class_programme: $classProgramme, class_year: $classYear, student_id: $studentId}
    ) {
      id
      first_name
      last_name
      class_programme
      class_year
      student_id
    }
  }
}
    `;
export type CreateMemberMutationFn = Apollo.MutationFunction<CreateMemberMutation, CreateMemberMutationVariables>;

/**
 * __useCreateMemberMutation__
 *
 * To run a mutation, you first call `useCreateMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMemberMutation, { data, loading, error }] = useCreateMemberMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      classProgramme: // value for 'classProgramme'
 *      classYear: // value for 'classYear'
 *      studentId: // value for 'studentId'
 *   },
 * });
 */
export function useCreateMemberMutation(baseOptions?: Apollo.MutationHookOptions<CreateMemberMutation, CreateMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMemberMutation, CreateMemberMutationVariables>(CreateMemberDocument, options);
      }
export type CreateMemberMutationHookResult = ReturnType<typeof useCreateMemberMutation>;
export type CreateMemberMutationResult = Apollo.MutationResult<CreateMemberMutation>;
export type CreateMemberMutationOptions = Apollo.BaseMutationOptions<CreateMemberMutation, CreateMemberMutationVariables>;
export const UpdateMemberDocument = gql`
    mutation UpdateMember($id: UUID!, $firstName: String, $lastName: String, $nickname: String, $classProgramme: String, $classYear: Int, $picturePath: String) {
  member {
    update(
      id: $id
      input: {first_name: $firstName, last_name: $lastName, nickname: $nickname, class_programme: $classProgramme, class_year: $classYear, picture_path: $picturePath}
    ) {
      first_name
      last_name
      nickname
      class_programme
      class_year
      picture_path
    }
  }
}
    `;
export type UpdateMemberMutationFn = Apollo.MutationFunction<UpdateMemberMutation, UpdateMemberMutationVariables>;

/**
 * __useUpdateMemberMutation__
 *
 * To run a mutation, you first call `useUpdateMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMemberMutation, { data, loading, error }] = useUpdateMemberMutation({
 *   variables: {
 *      id: // value for 'id'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      nickname: // value for 'nickname'
 *      classProgramme: // value for 'classProgramme'
 *      classYear: // value for 'classYear'
 *      picturePath: // value for 'picturePath'
 *   },
 * });
 */
export function useUpdateMemberMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMemberMutation, UpdateMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMemberMutation, UpdateMemberMutationVariables>(UpdateMemberDocument, options);
      }
export type UpdateMemberMutationHookResult = ReturnType<typeof useUpdateMemberMutation>;
export type UpdateMemberMutationResult = Apollo.MutationResult<UpdateMemberMutation>;
export type UpdateMemberMutationOptions = Apollo.BaseMutationOptions<UpdateMemberMutation, UpdateMemberMutationVariables>;
export const NewsPageDocument = gql`
    query NewsPage($page_number: Int!, $per_page: Int!) {
  news(page: $page_number, perPage: $per_page) {
    articles {
      id
      header
      headerEn
      body
      bodyEn
      author {
        id
        first_name
        nickname
        last_name
      }
      imageUrl
      publishedDatetime
      latestEditDatetime
    }
    pageInfo {
      totalPages
    }
  }
}
    `;

/**
 * __useNewsPageQuery__
 *
 * To run a query within a React component, call `useNewsPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useNewsPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewsPageQuery({
 *   variables: {
 *      page_number: // value for 'page_number'
 *      per_page: // value for 'per_page'
 *   },
 * });
 */
export function useNewsPageQuery(baseOptions: Apollo.QueryHookOptions<NewsPageQuery, NewsPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NewsPageQuery, NewsPageQueryVariables>(NewsPageDocument, options);
      }
export function useNewsPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NewsPageQuery, NewsPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NewsPageQuery, NewsPageQueryVariables>(NewsPageDocument, options);
        }
export type NewsPageQueryHookResult = ReturnType<typeof useNewsPageQuery>;
export type NewsPageLazyQueryHookResult = ReturnType<typeof useNewsPageLazyQuery>;
export type NewsPageQueryResult = Apollo.QueryResult<NewsPageQuery, NewsPageQueryVariables>;
export const NewsPageInfoDocument = gql`
    query NewsPageInfo($page_number: Int!, $per_page: Int!) {
  news(page: $page_number, perPage: $per_page) {
    pageInfo {
      totalPages
      totalItems
      hasNextPage
      hasPreviousPage
    }
  }
}
    `;

/**
 * __useNewsPageInfoQuery__
 *
 * To run a query within a React component, call `useNewsPageInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useNewsPageInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewsPageInfoQuery({
 *   variables: {
 *      page_number: // value for 'page_number'
 *      per_page: // value for 'per_page'
 *   },
 * });
 */
export function useNewsPageInfoQuery(baseOptions: Apollo.QueryHookOptions<NewsPageInfoQuery, NewsPageInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NewsPageInfoQuery, NewsPageInfoQueryVariables>(NewsPageInfoDocument, options);
      }
export function useNewsPageInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NewsPageInfoQuery, NewsPageInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NewsPageInfoQuery, NewsPageInfoQueryVariables>(NewsPageInfoDocument, options);
        }
export type NewsPageInfoQueryHookResult = ReturnType<typeof useNewsPageInfoQuery>;
export type NewsPageInfoLazyQueryHookResult = ReturnType<typeof useNewsPageInfoLazyQuery>;
export type NewsPageInfoQueryResult = Apollo.QueryResult<NewsPageInfoQuery, NewsPageInfoQueryVariables>;
export const ArticleDocument = gql`
    query Article($id: UUID!) {
  article(id: $id) {
    id
    body
    bodyEn
    header
    headerEn
    author {
      id
      first_name
      nickname
      last_name
    }
    imageUrl
    publishedDatetime
  }
}
    `;

/**
 * __useArticleQuery__
 *
 * To run a query within a React component, call `useArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useArticleQuery(baseOptions: Apollo.QueryHookOptions<ArticleQuery, ArticleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, options);
      }
export function useArticleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticleQuery, ArticleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, options);
        }
export type ArticleQueryHookResult = ReturnType<typeof useArticleQuery>;
export type ArticleLazyQueryHookResult = ReturnType<typeof useArticleLazyQuery>;
export type ArticleQueryResult = Apollo.QueryResult<ArticleQuery, ArticleQueryVariables>;
export const UpdateArticleDocument = gql`
    mutation UpdateArticle($id: UUID!, $header: String, $body: String, $headerEn: String, $bodyEn: String, $imageName: String) {
  article {
    update(
      id: $id
      input: {header: $header, body: $body, headerEn: $headerEn, bodyEn: $bodyEn, imageName: $imageName}
    ) {
      article {
        id
        header
        body
        headerEn
        bodyEn
        imageUrl
      }
      uploadUrl
    }
  }
}
    `;
export type UpdateArticleMutationFn = Apollo.MutationFunction<UpdateArticleMutation, UpdateArticleMutationVariables>;

/**
 * __useUpdateArticleMutation__
 *
 * To run a mutation, you first call `useUpdateArticleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateArticleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateArticleMutation, { data, loading, error }] = useUpdateArticleMutation({
 *   variables: {
 *      id: // value for 'id'
 *      header: // value for 'header'
 *      body: // value for 'body'
 *      headerEn: // value for 'headerEn'
 *      bodyEn: // value for 'bodyEn'
 *      imageName: // value for 'imageName'
 *   },
 * });
 */
export function useUpdateArticleMutation(baseOptions?: Apollo.MutationHookOptions<UpdateArticleMutation, UpdateArticleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateArticleMutation, UpdateArticleMutationVariables>(UpdateArticleDocument, options);
      }
export type UpdateArticleMutationHookResult = ReturnType<typeof useUpdateArticleMutation>;
export type UpdateArticleMutationResult = Apollo.MutationResult<UpdateArticleMutation>;
export type UpdateArticleMutationOptions = Apollo.BaseMutationOptions<UpdateArticleMutation, UpdateArticleMutationVariables>;
export const CreateArticleDocument = gql`
    mutation CreateArticle($header: String!, $body: String!, $headerEn: String!, $bodyEn: String!, $imageName: String) {
  article {
    create(
      input: {header: $header, body: $body, headerEn: $headerEn, bodyEn: $bodyEn, imageName: $imageName}
    ) {
      article {
        id
        header
        body
        headerEn
        bodyEn
        imageUrl
      }
      uploadUrl
    }
  }
}
    `;
export type CreateArticleMutationFn = Apollo.MutationFunction<CreateArticleMutation, CreateArticleMutationVariables>;

/**
 * __useCreateArticleMutation__
 *
 * To run a mutation, you first call `useCreateArticleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateArticleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createArticleMutation, { data, loading, error }] = useCreateArticleMutation({
 *   variables: {
 *      header: // value for 'header'
 *      body: // value for 'body'
 *      headerEn: // value for 'headerEn'
 *      bodyEn: // value for 'bodyEn'
 *      imageName: // value for 'imageName'
 *   },
 * });
 */
export function useCreateArticleMutation(baseOptions?: Apollo.MutationHookOptions<CreateArticleMutation, CreateArticleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateArticleMutation, CreateArticleMutationVariables>(CreateArticleDocument, options);
      }
export type CreateArticleMutationHookResult = ReturnType<typeof useCreateArticleMutation>;
export type CreateArticleMutationResult = Apollo.MutationResult<CreateArticleMutation>;
export type CreateArticleMutationOptions = Apollo.BaseMutationOptions<CreateArticleMutation, CreateArticleMutationVariables>;
export const RemoveArticleDocument = gql`
    mutation RemoveArticle($id: UUID!) {
  article {
    remove(id: $id) {
      article {
        id
      }
    }
  }
}
    `;
export type RemoveArticleMutationFn = Apollo.MutationFunction<RemoveArticleMutation, RemoveArticleMutationVariables>;

/**
 * __useRemoveArticleMutation__
 *
 * To run a mutation, you first call `useRemoveArticleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveArticleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeArticleMutation, { data, loading, error }] = useRemoveArticleMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveArticleMutation(baseOptions?: Apollo.MutationHookOptions<RemoveArticleMutation, RemoveArticleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveArticleMutation, RemoveArticleMutationVariables>(RemoveArticleDocument, options);
      }
export type RemoveArticleMutationHookResult = ReturnType<typeof useRemoveArticleMutation>;
export type RemoveArticleMutationResult = Apollo.MutationResult<RemoveArticleMutation>;
export type RemoveArticleMutationOptions = Apollo.BaseMutationOptions<RemoveArticleMutation, RemoveArticleMutationVariables>;
export const GetPresignedPutUrlDocument = gql`
    mutation getPresignedPutUrl($fileName: String!) {
  article {
    presignedPutUrl(fileName: $fileName)
  }
}
    `;
export type GetPresignedPutUrlMutationFn = Apollo.MutationFunction<GetPresignedPutUrlMutation, GetPresignedPutUrlMutationVariables>;

/**
 * __useGetPresignedPutUrlMutation__
 *
 * To run a mutation, you first call `useGetPresignedPutUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetPresignedPutUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getPresignedPutUrlMutation, { data, loading, error }] = useGetPresignedPutUrlMutation({
 *   variables: {
 *      fileName: // value for 'fileName'
 *   },
 * });
 */
export function useGetPresignedPutUrlMutation(baseOptions?: Apollo.MutationHookOptions<GetPresignedPutUrlMutation, GetPresignedPutUrlMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetPresignedPutUrlMutation, GetPresignedPutUrlMutationVariables>(GetPresignedPutUrlDocument, options);
      }
export type GetPresignedPutUrlMutationHookResult = ReturnType<typeof useGetPresignedPutUrlMutation>;
export type GetPresignedPutUrlMutationResult = Apollo.MutationResult<GetPresignedPutUrlMutation>;
export type GetPresignedPutUrlMutationOptions = Apollo.BaseMutationOptions<GetPresignedPutUrlMutation, GetPresignedPutUrlMutationVariables>;
export const GetPositionsDocument = gql`
    query GetPositions($committeeId: UUID) {
  positions(filter: {committee_id: $committeeId}) {
    positions {
      id
      name
      nameEn
      committee {
        name
      }
    }
    pageInfo {
      hasNextPage
    }
  }
}
    `;

/**
 * __useGetPositionsQuery__
 *
 * To run a query within a React component, call `useGetPositionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPositionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPositionsQuery({
 *   variables: {
 *      committeeId: // value for 'committeeId'
 *   },
 * });
 */
export function useGetPositionsQuery(baseOptions?: Apollo.QueryHookOptions<GetPositionsQuery, GetPositionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPositionsQuery, GetPositionsQueryVariables>(GetPositionsDocument, options);
      }
export function useGetPositionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPositionsQuery, GetPositionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPositionsQuery, GetPositionsQueryVariables>(GetPositionsDocument, options);
        }
export type GetPositionsQueryHookResult = ReturnType<typeof useGetPositionsQuery>;
export type GetPositionsLazyQueryHookResult = ReturnType<typeof useGetPositionsLazyQuery>;
export type GetPositionsQueryResult = Apollo.QueryResult<GetPositionsQuery, GetPositionsQueryVariables>;