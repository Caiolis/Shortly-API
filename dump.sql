--
-- PostgreSQL database dump
--

-- Dumped from database version 14.8 (Ubuntu 14.8-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.8 (Ubuntu 14.8-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    token text NOT NULL
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    user_id integer NOT NULL,
    url text NOT NULL,
    short_url text NOT NULL,
    visit_count integer DEFAULT 0
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    email text NOT NULL,
    password text NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (1, 1, '7859d55d-f502-4eb3-b1f0-b4f4076cc464');


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES (3, 1, 'https://...', 'q2fxGBrXjd1jducDBHRy-', 0);
INSERT INTO public.urls VALUES (4, 1, 'https://...', 'MvNDPgd5BAzcU-tBjArQu', 0);
INSERT INTO public.urls VALUES (5, 1, 'https://...', 'kNDD3KSBmvjacaNWPlhJQ', 0);
INSERT INTO public.urls VALUES (6, 1, 'https://...', '7ZtcvpNlZDOpIRL8Gdro6', 0);
INSERT INTO public.urls VALUES (7, 1, 'https://...', 'Ia_zFP3-XXtDYe53a92D7', 0);
INSERT INTO public.urls VALUES (8, 1, 'https://...', 'iWFIUlUJsTCB-qc-SX4Xw', 0);
INSERT INTO public.urls VALUES (9, 1, 'https://...', 'oo1qh7OqFwu0HYi8we_U1', 0);
INSERT INTO public.urls VALUES (10, 1, 'https://...', 'YcgKzL4ea4bA7BUY4519w', 0);
INSERT INTO public.urls VALUES (11, 1, 'https://...', 'TuVjEcF2Fq1oNZbttqfZe', 0);
INSERT INTO public.urls VALUES (15, 1, 'https://...', 'GCUi0lNtvg8TQK0xR-aVw', 0);
INSERT INTO public.urls VALUES (16, 1, 'https://...', 'oAnCG4KmnBnLvXJ-Tpes5', 0);
INSERT INTO public.urls VALUES (17, 1, 'https://...', 'Nf9o4rkJNLO5bjC4aplN9', 0);
INSERT INTO public.urls VALUES (18, 1, 'https://...', 'cMyKhyGofKa_QdE2bwlnF', 0);
INSERT INTO public.urls VALUES (19, 1, 'https://...', 'bB0LjJOJNiXg3wUkebO5t', 0);
INSERT INTO public.urls VALUES (20, 1, 'https://...', 'Ig9fbIR89ZdF5ETpW2UCd', 0);
INSERT INTO public.urls VALUES (21, 1, 'https://...', 'adyCpmhfv1HQowMTqYNUa', 0);
INSERT INTO public.urls VALUES (22, 1, 'https://...', 'F87MebJZJc7ODuKB_1wCw', 0);
INSERT INTO public.urls VALUES (23, 1, 'https://...', 'QO6K6GF8gbV6kRD7PWqRp', 0);
INSERT INTO public.urls VALUES (24, 1, 'https://...', '3a-LLlz3q712yF1oNVkD9', 0);
INSERT INTO public.urls VALUES (25, 1, 'https://...', '5VH4j0VkRUlUpjXkjmbYT', 0);
INSERT INTO public.urls VALUES (26, 1, 'https://...', 'yWa0EEdukdHlSnZ22WV5d', 0);
INSERT INTO public.urls VALUES (27, 1, 'https://...', 'a9Wr45oKtwdXiLz3RnrMO', 0);
INSERT INTO public.urls VALUES (28, 1, 'https://twitter.com/home', 'IgcHPF3HTVDk60K_Ootwk', 18);
INSERT INTO public.urls VALUES (2, 1, 'https://...', 'hxcgkw99z9MMB8-bsKzUy', 4);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'João', 'joao@driven.com.br', '$2b$10$d/Xv7RIt4/VcU71Qdpg6DuDpuk7MeA3dwj5azvU.oTePizjaC9DSG');


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 1, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 28, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_token_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_token_key UNIQUE (token);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

