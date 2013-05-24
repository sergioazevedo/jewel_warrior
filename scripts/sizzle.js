  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>sizzle/sizzle.js at 1.9.3 · jquery/sizzle · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <link rel="xhr-socket" href="/_sockets" />


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="5zSa7pl2QZTk62XAV9o0CmQlrt+pJkGy4q41Vk0SNtc=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-159290696eb4150b6abdc4ac7fa8da500bcca10f.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-5a396ab267d3afed26fc4f3bfd7336e0c50b738a.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-92d138f450f2960501e28397a2f63b0f100590f0.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-96584b7e42932c33acd470abba115f766a577fd7.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="e6f5dd9ec79a3f28962f9ad2031aacbb">

        <link data-pjax-transient rel='permalink' href='/jquery/sizzle/blob/204ddda92ba3de51b4b870b2011de7b8d7250458/sizzle.js'>
    <meta property="og:title" content="sizzle"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/jquery/sizzle"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/6906f317a4733f4379b06c32229ef02f?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="sizzle - A sizzlin&#39; hot selector engine."/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="jquery/sizzle"/>

    <meta name="description" content="sizzle - A sizzlin&#39; hot selector engine." />


    <meta content="70142" name="octolytics-dimension-user_id" /><meta content="45547" name="octolytics-dimension-repository_id" />
  <link href="https://github.com/jquery/sizzle/commits/1.9.3.atom" rel="alternate" title="Recent Commits to sizzle:1.9.3" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob  vis-public env-production  ">
    <div id="wrapper">

      
      
      

      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">Github</a>

    <div class="header-actions">
      <a class="button primary" href="/signup">Sign up</a>
      <a class="button" href="/login?return_to=%2Fjquery%2Fsizzle%2Fblob%2F1.9.3%2Fsizzle.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">


      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="http://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search-icon tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="octicon octicon-gear "></span></a>

  <input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
      data-repo="jquery/sizzle"
      data-branch="1.9.3"
      data-sha="01f785a39b6c33bdce39dc259f14ad7a468b0548"
  >

    <input type="hidden" name="nwo" value="jquery/sizzle" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

  <div class="divider-vertical"></div>

</form>
    </div>

  </div>
</div>


      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu ">
          <div class="container">
            <div class="title-actions-bar">
              

<ul class="pagehead-actions">



    <li>
      <a href="/login?return_to=%2Fjquery%2Fsizzle"
        class="minibutton js-toggler-target star-button entice tooltipped upwards"
        title="You must be signed in to use this feature" rel="nofollow">
        <span class="octicon octicon-star"></span>Star
      </a>
      <a class="social-count js-social-count" href="/jquery/sizzle/stargazers">
        2,508
      </a>
    </li>
    <li>
      <a href="/login?return_to=%2Fjquery%2Fsizzle"
        class="minibutton js-toggler-target fork-button entice tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/jquery/sizzle/network" class="social-count">
        365
      </a>
    </li>
</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-octicon octicon-repo"></span>
                <span class="author vcard">
                  <a href="/jquery" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">jquery</span>
                  </a></span> /
                <strong><a href="/jquery/sizzle" class="js-current-repository">sizzle</a></strong>
              </h1>
            </div>

            
  <ul class="tabs">
    <li class="pulse-nav"><a href="/jquery/sizzle/pulse" class="js-selected-navigation-item " data-selected-links="pulse /jquery/sizzle/pulse" rel="nofollow"><span class="octicon octicon-pulse"></span></a></li>
    <li><a href="/jquery/sizzle/tree/1.9.3" class="js-selected-navigation-item selected" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /jquery/sizzle/tree/1.9.3">Code</a></li>
    <li><a href="/jquery/sizzle/network" class="js-selected-navigation-item " data-selected-links="repo_network /jquery/sizzle/network">Network</a></li>
    <li><a href="/jquery/sizzle/pulls" class="js-selected-navigation-item " data-selected-links="repo_pulls /jquery/sizzle/pulls">Pull Requests <span class='counter'>0</span></a></li>

      <li><a href="/jquery/sizzle/issues" class="js-selected-navigation-item " data-selected-links="repo_issues /jquery/sizzle/issues">Issues <span class='counter'>6</span></a></li>

      <li><a href="/jquery/sizzle/wiki" class="js-selected-navigation-item " data-selected-links="repo_wiki /jquery/sizzle/wiki">Wiki</a></li>


    <li><a href="/jquery/sizzle/graphs" class="js-selected-navigation-item " data-selected-links="repo_graphs repo_contributors /jquery/sizzle/graphs">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/jquery/sizzle/tags" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_tags /jquery/sizzle/tags">Tags <span class="counter ">20</span></a></li>
    </ul>
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="1.9.3">
        <span class="octicon octicon-tag"></span>
        <i>tag:</i>
        <span class="js-select-button">1.9.3</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">

        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div>
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches">

            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/sizzle/blob/master/sizzle.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
                </div> <!-- /.select-menu-item -->
            </div>

              <div class="select-menu-no-results">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags">
            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item selected">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/sizzle/blob/1.9.3/sizzle.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.9.3" rel="nofollow" title="1.9.3">1.9.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/sizzle/blob/1.9.2/sizzle.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.9.2" rel="nofollow" title="1.9.2">1.9.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/sizzle/blob/1.9.1/sizzle.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.9.1" rel="nofollow" title="1.9.1">1.9.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/sizzle/blob/1.9.0/sizzle.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.9.0" rel="nofollow" title="1.9.0">1.9.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/sizzle/blob/1.8.3/sizzle.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.8.3" rel="nofollow" title="1.8.3">1.8.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/sizzle/blob/1.8.2/sizzle.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.8.2" rel="nofollow" title="1.8.2">1.8.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/sizzle/blob/1.8.1/sizzle.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.8.1" rel="nofollow" title="1.8.1">1.8.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/sizzle/blob/1.8.0/sizzle.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.8.0" rel="nofollow" title="1.8.0">1.8.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/sizzle/blob/1.7.2/sizzle.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.7.2" rel="nofollow" title="1.7.2">1.7.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/sizzle/blob/1.7.1/sizzle.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.7.1" rel="nofollow" title="1.7.1">1.7.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/sizzle/blob/1.7/sizzle.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.7" rel="nofollow" title="1.7">1.7</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/sizzle/blob/1.6.4/sizzle.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.6.4" rel="nofollow" title="1.6.4">1.6.4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/sizzle/blob/1.6.3/sizzle.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.6.3" rel="nofollow" title="1.6.3">1.6.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/sizzle/blob/1.6.2/sizzle.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.6.2" rel="nofollow" title="1.6.2">1.6.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/sizzle/blob/1.6.1/sizzle.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.6.1" rel="nofollow" title="1.6.1">1.6.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/sizzle/blob/1.6/sizzle.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.6" rel="nofollow" title="1.6">1.6</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/sizzle/blob/1.5.2/sizzle.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.5.2" rel="nofollow" title="1.5.2">1.5.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/sizzle/blob/1.5.1/sizzle.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.5.1" rel="nofollow" title="1.5.1">1.5.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/sizzle/blob/1.5/sizzle.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.5" rel="nofollow" title="1.5">1.5</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/sizzle/blob/1.4.4/sizzle.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.4.4" rel="nofollow" title="1.4.4">1.4.4</a>
                </div> <!-- /.select-menu-item -->
            </div>

            <div class="select-menu-no-results">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/jquery/sizzle/tree/1.9.3" class="selected js-selected-navigation-item tabnav-tab" data-selected-links="repo_source /jquery/sizzle/tree/1.9.3">Files</a></li>
    <li><a href="/jquery/sizzle/commits/1.9.3" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_commits /jquery/sizzle/commits/1.9.3">Commits</a></li>
    <li><a href="/jquery/sizzle/branches" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_branches /jquery/sizzle/branches" rel="nofollow">Branches <span class="counter ">1</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:ad1bd1f215d3c890b771567a0a78b48b -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:ad1bd1f215d3c890b771567a0a78b48b -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/jquery/sizzle/tree/1.9.3" class="js-slide-to" data-branch="1.9.3" data-direction="back" itemscope="url"><span itemprop="title">sizzle</span></a></span></span><span class="separator"> / </span><strong class="final-path">sizzle.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="sizzle.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
        </div>

      <a href="/jquery/sizzle/find/1.9.3" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/f16d4602c1c90646438a0b534ff61889?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/gibson042" rel="author">gibson042</a></span>
    <time class="js-relative-date" datetime="2013-04-16T14:12:53-07:00" title="2013-04-16 14:12:53">April 16, 2013</time>
    <div class="commit-title">
        <a href="/jquery/sizzle/commit/26d2cef803e613fcab99d049c1f947340af968f5" class="message">No ticket: Miscellaneous improvements</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>22</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="jeresig" href="/jquery/sizzle/commits/1.9.3/sizzle.js?author=jeresig"><img height="20" src="https://secure.gravatar.com/avatar/b3e04a46e85ad3e165d66f5d927eb609?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="timmywil" href="/jquery/sizzle/commits/1.9.3/sizzle.js?author=timmywil"><img height="20" src="https://secure.gravatar.com/avatar/6b57220ae48e1ac5d02227bdada8a4d6?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="gibson042" href="/jquery/sizzle/commits/1.9.3/sizzle.js?author=gibson042"><img height="20" src="https://secure.gravatar.com/avatar/f16d4602c1c90646438a0b534ff61889?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="jitter" href="/jquery/sizzle/commits/1.9.3/sizzle.js?author=jitter"><img height="20" src="https://secure.gravatar.com/avatar/2ca079caf9a1e280af4537b8072c15b1?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="LosTFx" href="/jquery/sizzle/commits/1.9.3/sizzle.js?author=LosTFx"><img height="20" src="https://secure.gravatar.com/avatar/9abfe241987445594a9fe2c7ce6c7a90?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="csnover" href="/jquery/sizzle/commits/1.9.3/sizzle.js?author=csnover"><img height="20" src="https://secure.gravatar.com/avatar/ffe1561ee79aea59ef8a68a56c365883?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="staabm" href="/jquery/sizzle/commits/1.9.3/sizzle.js?author=staabm"><img height="20" src="https://secure.gravatar.com/avatar/a40b83540078e11fab32334db9770b84?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="dmethvin" href="/jquery/sizzle/commits/1.9.3/sizzle.js?author=dmethvin"><img height="20" src="https://secure.gravatar.com/avatar/161a4cc619398bea1e1714036ed122cf?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="chuyeow" href="/jquery/sizzle/commits/1.9.3/sizzle.js?author=chuyeow"><img height="20" src="https://secure.gravatar.com/avatar/00fd4ce27c06ba63e7ddca4c3d67e5ea?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="fjakobs" href="/jquery/sizzle/commits/1.9.3/sizzle.js?author=fjakobs"><img height="20" src="https://secure.gravatar.com/avatar/05d0b094455964dc1d8e6c2ece4c27fe?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="mikesherov" href="/jquery/sizzle/commits/1.9.3/sizzle.js?author=mikesherov"><img height="20" src="https://secure.gravatar.com/avatar/a123410cfb9ea6510294a295bb548530?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="mathiasbynens" href="/jquery/sizzle/commits/1.9.3/sizzle.js?author=mathiasbynens"><img height="20" src="https://secure.gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="rdeago" href="/jquery/sizzle/commits/1.9.3/sizzle.js?author=rdeago"><img height="20" src="https://secure.gravatar.com/avatar/d1fbc052b666aec0ec5285ad756f394f?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="jonathansampson" href="/jquery/sizzle/commits/1.9.3/sizzle.js?author=jonathansampson"><img height="20" src="https://secure.gravatar.com/avatar/a84a8714fd33f6676743f9734a824feb?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="Yaffle" href="/jquery/sizzle/commits/1.9.3/sizzle.js?author=Yaffle"><img height="20" src="https://secure.gravatar.com/avatar/7ca81e31b0f3122eb71b1ef9fbaaa9cc?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="gnarf37" href="/jquery/sizzle/commits/1.9.3/sizzle.js?author=gnarf37"><img height="20" src="https://secure.gravatar.com/avatar/de31e75f0b6f31344cc18e2a15c2f1c9?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="DBJDBJ" href="/jquery/sizzle/commits/1.9.3/sizzle.js?author=DBJDBJ"><img height="20" src="https://secure.gravatar.com/avatar/e5fa053be476a3ac685519f8d9cf3afd?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="walkingeyerobot" href="/jquery/sizzle/commits/1.9.3/sizzle.js?author=walkingeyerobot"><img height="20" src="https://secure.gravatar.com/avatar/93e851b52dc8997c2964769c532598c6?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="pborreli" href="/jquery/sizzle/commits/1.9.3/sizzle.js?author=pborreli"><img height="20" src="https://secure.gravatar.com/avatar/5c299a02c11ce797f20df385f560a16a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="ChadKillingsworth" href="/jquery/sizzle/commits/1.9.3/sizzle.js?author=ChadKillingsworth"><img height="20" src="https://secure.gravatar.com/avatar/a3b27be862acba220cc5526d76b8da0c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="brandonaaron" href="/jquery/sizzle/commits/1.9.3/sizzle.js?author=brandonaaron"><img height="20" src="https://secure.gravatar.com/avatar/5caa0660a37102fb758ebff952d936d9?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="antonkovalyov" href="/jquery/sizzle/commits/1.9.3/sizzle.js?author=antonkovalyov"><img height="20" src="https://secure.gravatar.com/avatar/de4bc2ea0dbe8d1ef6c3e190325a35de?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/b3e04a46e85ad3e165d66f5d927eb609?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/jeresig">jeresig</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/6b57220ae48e1ac5d02227bdada8a4d6?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/timmywil">timmywil</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/f16d4602c1c90646438a0b534ff61889?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/gibson042">gibson042</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/2ca079caf9a1e280af4537b8072c15b1?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/jitter">jitter</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/9abfe241987445594a9fe2c7ce6c7a90?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/LosTFx">LosTFx</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/ffe1561ee79aea59ef8a68a56c365883?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/csnover">csnover</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/a40b83540078e11fab32334db9770b84?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/staabm">staabm</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/161a4cc619398bea1e1714036ed122cf?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/dmethvin">dmethvin</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/00fd4ce27c06ba63e7ddca4c3d67e5ea?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/chuyeow">chuyeow</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/05d0b094455964dc1d8e6c2ece4c27fe?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/fjakobs">fjakobs</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/a123410cfb9ea6510294a295bb548530?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/mikesherov">mikesherov</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/mathiasbynens">mathiasbynens</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/d1fbc052b666aec0ec5285ad756f394f?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/rdeago">rdeago</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/a84a8714fd33f6676743f9734a824feb?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/jonathansampson">jonathansampson</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/7ca81e31b0f3122eb71b1ef9fbaaa9cc?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/Yaffle">Yaffle</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/de31e75f0b6f31344cc18e2a15c2f1c9?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/gnarf37">gnarf37</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/e5fa053be476a3ac685519f8d9cf3afd?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/DBJDBJ">DBJDBJ</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/93e851b52dc8997c2964769c532598c6?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/walkingeyerobot">walkingeyerobot</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/5c299a02c11ce797f20df385f560a16a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/pborreli">pborreli</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/a3b27be862acba220cc5526d76b8da0c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/ChadKillingsworth">ChadKillingsworth</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/5caa0660a37102fb758ebff952d936d9?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/brandonaaron">brandonaaron</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/de4bc2ea0dbe8d1ef6c3e190325a35de?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/antonkovalyov">antonkovalyov</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/jquery/sizzle/blob/204ddda92ba3de51b4b870b2011de7b8d7250458/sizzle.js" data-title="sizzle/sizzle.js at 1.9.3 · jquery/sizzle · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="octicon octicon-file-text"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>1930 lines (1651 sloc)</span>
                <span>54.586 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                      <a class="minibutton js-entice" href=""
                         data-entice="You must be signed in and on a branch to make or propose changes">Edit</a>
                  <a href="/jquery/sizzle/raw/1.9.3/sizzle.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/jquery/sizzle/blame/1.9.3/sizzle.js" class="button minibutton ">Blame</a>
                  <a href="/jquery/sizzle/commits/1.9.3/sizzle.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>
<span id="L573" rel="#L573">573</span>
<span id="L574" rel="#L574">574</span>
<span id="L575" rel="#L575">575</span>
<span id="L576" rel="#L576">576</span>
<span id="L577" rel="#L577">577</span>
<span id="L578" rel="#L578">578</span>
<span id="L579" rel="#L579">579</span>
<span id="L580" rel="#L580">580</span>
<span id="L581" rel="#L581">581</span>
<span id="L582" rel="#L582">582</span>
<span id="L583" rel="#L583">583</span>
<span id="L584" rel="#L584">584</span>
<span id="L585" rel="#L585">585</span>
<span id="L586" rel="#L586">586</span>
<span id="L587" rel="#L587">587</span>
<span id="L588" rel="#L588">588</span>
<span id="L589" rel="#L589">589</span>
<span id="L590" rel="#L590">590</span>
<span id="L591" rel="#L591">591</span>
<span id="L592" rel="#L592">592</span>
<span id="L593" rel="#L593">593</span>
<span id="L594" rel="#L594">594</span>
<span id="L595" rel="#L595">595</span>
<span id="L596" rel="#L596">596</span>
<span id="L597" rel="#L597">597</span>
<span id="L598" rel="#L598">598</span>
<span id="L599" rel="#L599">599</span>
<span id="L600" rel="#L600">600</span>
<span id="L601" rel="#L601">601</span>
<span id="L602" rel="#L602">602</span>
<span id="L603" rel="#L603">603</span>
<span id="L604" rel="#L604">604</span>
<span id="L605" rel="#L605">605</span>
<span id="L606" rel="#L606">606</span>
<span id="L607" rel="#L607">607</span>
<span id="L608" rel="#L608">608</span>
<span id="L609" rel="#L609">609</span>
<span id="L610" rel="#L610">610</span>
<span id="L611" rel="#L611">611</span>
<span id="L612" rel="#L612">612</span>
<span id="L613" rel="#L613">613</span>
<span id="L614" rel="#L614">614</span>
<span id="L615" rel="#L615">615</span>
<span id="L616" rel="#L616">616</span>
<span id="L617" rel="#L617">617</span>
<span id="L618" rel="#L618">618</span>
<span id="L619" rel="#L619">619</span>
<span id="L620" rel="#L620">620</span>
<span id="L621" rel="#L621">621</span>
<span id="L622" rel="#L622">622</span>
<span id="L623" rel="#L623">623</span>
<span id="L624" rel="#L624">624</span>
<span id="L625" rel="#L625">625</span>
<span id="L626" rel="#L626">626</span>
<span id="L627" rel="#L627">627</span>
<span id="L628" rel="#L628">628</span>
<span id="L629" rel="#L629">629</span>
<span id="L630" rel="#L630">630</span>
<span id="L631" rel="#L631">631</span>
<span id="L632" rel="#L632">632</span>
<span id="L633" rel="#L633">633</span>
<span id="L634" rel="#L634">634</span>
<span id="L635" rel="#L635">635</span>
<span id="L636" rel="#L636">636</span>
<span id="L637" rel="#L637">637</span>
<span id="L638" rel="#L638">638</span>
<span id="L639" rel="#L639">639</span>
<span id="L640" rel="#L640">640</span>
<span id="L641" rel="#L641">641</span>
<span id="L642" rel="#L642">642</span>
<span id="L643" rel="#L643">643</span>
<span id="L644" rel="#L644">644</span>
<span id="L645" rel="#L645">645</span>
<span id="L646" rel="#L646">646</span>
<span id="L647" rel="#L647">647</span>
<span id="L648" rel="#L648">648</span>
<span id="L649" rel="#L649">649</span>
<span id="L650" rel="#L650">650</span>
<span id="L651" rel="#L651">651</span>
<span id="L652" rel="#L652">652</span>
<span id="L653" rel="#L653">653</span>
<span id="L654" rel="#L654">654</span>
<span id="L655" rel="#L655">655</span>
<span id="L656" rel="#L656">656</span>
<span id="L657" rel="#L657">657</span>
<span id="L658" rel="#L658">658</span>
<span id="L659" rel="#L659">659</span>
<span id="L660" rel="#L660">660</span>
<span id="L661" rel="#L661">661</span>
<span id="L662" rel="#L662">662</span>
<span id="L663" rel="#L663">663</span>
<span id="L664" rel="#L664">664</span>
<span id="L665" rel="#L665">665</span>
<span id="L666" rel="#L666">666</span>
<span id="L667" rel="#L667">667</span>
<span id="L668" rel="#L668">668</span>
<span id="L669" rel="#L669">669</span>
<span id="L670" rel="#L670">670</span>
<span id="L671" rel="#L671">671</span>
<span id="L672" rel="#L672">672</span>
<span id="L673" rel="#L673">673</span>
<span id="L674" rel="#L674">674</span>
<span id="L675" rel="#L675">675</span>
<span id="L676" rel="#L676">676</span>
<span id="L677" rel="#L677">677</span>
<span id="L678" rel="#L678">678</span>
<span id="L679" rel="#L679">679</span>
<span id="L680" rel="#L680">680</span>
<span id="L681" rel="#L681">681</span>
<span id="L682" rel="#L682">682</span>
<span id="L683" rel="#L683">683</span>
<span id="L684" rel="#L684">684</span>
<span id="L685" rel="#L685">685</span>
<span id="L686" rel="#L686">686</span>
<span id="L687" rel="#L687">687</span>
<span id="L688" rel="#L688">688</span>
<span id="L689" rel="#L689">689</span>
<span id="L690" rel="#L690">690</span>
<span id="L691" rel="#L691">691</span>
<span id="L692" rel="#L692">692</span>
<span id="L693" rel="#L693">693</span>
<span id="L694" rel="#L694">694</span>
<span id="L695" rel="#L695">695</span>
<span id="L696" rel="#L696">696</span>
<span id="L697" rel="#L697">697</span>
<span id="L698" rel="#L698">698</span>
<span id="L699" rel="#L699">699</span>
<span id="L700" rel="#L700">700</span>
<span id="L701" rel="#L701">701</span>
<span id="L702" rel="#L702">702</span>
<span id="L703" rel="#L703">703</span>
<span id="L704" rel="#L704">704</span>
<span id="L705" rel="#L705">705</span>
<span id="L706" rel="#L706">706</span>
<span id="L707" rel="#L707">707</span>
<span id="L708" rel="#L708">708</span>
<span id="L709" rel="#L709">709</span>
<span id="L710" rel="#L710">710</span>
<span id="L711" rel="#L711">711</span>
<span id="L712" rel="#L712">712</span>
<span id="L713" rel="#L713">713</span>
<span id="L714" rel="#L714">714</span>
<span id="L715" rel="#L715">715</span>
<span id="L716" rel="#L716">716</span>
<span id="L717" rel="#L717">717</span>
<span id="L718" rel="#L718">718</span>
<span id="L719" rel="#L719">719</span>
<span id="L720" rel="#L720">720</span>
<span id="L721" rel="#L721">721</span>
<span id="L722" rel="#L722">722</span>
<span id="L723" rel="#L723">723</span>
<span id="L724" rel="#L724">724</span>
<span id="L725" rel="#L725">725</span>
<span id="L726" rel="#L726">726</span>
<span id="L727" rel="#L727">727</span>
<span id="L728" rel="#L728">728</span>
<span id="L729" rel="#L729">729</span>
<span id="L730" rel="#L730">730</span>
<span id="L731" rel="#L731">731</span>
<span id="L732" rel="#L732">732</span>
<span id="L733" rel="#L733">733</span>
<span id="L734" rel="#L734">734</span>
<span id="L735" rel="#L735">735</span>
<span id="L736" rel="#L736">736</span>
<span id="L737" rel="#L737">737</span>
<span id="L738" rel="#L738">738</span>
<span id="L739" rel="#L739">739</span>
<span id="L740" rel="#L740">740</span>
<span id="L741" rel="#L741">741</span>
<span id="L742" rel="#L742">742</span>
<span id="L743" rel="#L743">743</span>
<span id="L744" rel="#L744">744</span>
<span id="L745" rel="#L745">745</span>
<span id="L746" rel="#L746">746</span>
<span id="L747" rel="#L747">747</span>
<span id="L748" rel="#L748">748</span>
<span id="L749" rel="#L749">749</span>
<span id="L750" rel="#L750">750</span>
<span id="L751" rel="#L751">751</span>
<span id="L752" rel="#L752">752</span>
<span id="L753" rel="#L753">753</span>
<span id="L754" rel="#L754">754</span>
<span id="L755" rel="#L755">755</span>
<span id="L756" rel="#L756">756</span>
<span id="L757" rel="#L757">757</span>
<span id="L758" rel="#L758">758</span>
<span id="L759" rel="#L759">759</span>
<span id="L760" rel="#L760">760</span>
<span id="L761" rel="#L761">761</span>
<span id="L762" rel="#L762">762</span>
<span id="L763" rel="#L763">763</span>
<span id="L764" rel="#L764">764</span>
<span id="L765" rel="#L765">765</span>
<span id="L766" rel="#L766">766</span>
<span id="L767" rel="#L767">767</span>
<span id="L768" rel="#L768">768</span>
<span id="L769" rel="#L769">769</span>
<span id="L770" rel="#L770">770</span>
<span id="L771" rel="#L771">771</span>
<span id="L772" rel="#L772">772</span>
<span id="L773" rel="#L773">773</span>
<span id="L774" rel="#L774">774</span>
<span id="L775" rel="#L775">775</span>
<span id="L776" rel="#L776">776</span>
<span id="L777" rel="#L777">777</span>
<span id="L778" rel="#L778">778</span>
<span id="L779" rel="#L779">779</span>
<span id="L780" rel="#L780">780</span>
<span id="L781" rel="#L781">781</span>
<span id="L782" rel="#L782">782</span>
<span id="L783" rel="#L783">783</span>
<span id="L784" rel="#L784">784</span>
<span id="L785" rel="#L785">785</span>
<span id="L786" rel="#L786">786</span>
<span id="L787" rel="#L787">787</span>
<span id="L788" rel="#L788">788</span>
<span id="L789" rel="#L789">789</span>
<span id="L790" rel="#L790">790</span>
<span id="L791" rel="#L791">791</span>
<span id="L792" rel="#L792">792</span>
<span id="L793" rel="#L793">793</span>
<span id="L794" rel="#L794">794</span>
<span id="L795" rel="#L795">795</span>
<span id="L796" rel="#L796">796</span>
<span id="L797" rel="#L797">797</span>
<span id="L798" rel="#L798">798</span>
<span id="L799" rel="#L799">799</span>
<span id="L800" rel="#L800">800</span>
<span id="L801" rel="#L801">801</span>
<span id="L802" rel="#L802">802</span>
<span id="L803" rel="#L803">803</span>
<span id="L804" rel="#L804">804</span>
<span id="L805" rel="#L805">805</span>
<span id="L806" rel="#L806">806</span>
<span id="L807" rel="#L807">807</span>
<span id="L808" rel="#L808">808</span>
<span id="L809" rel="#L809">809</span>
<span id="L810" rel="#L810">810</span>
<span id="L811" rel="#L811">811</span>
<span id="L812" rel="#L812">812</span>
<span id="L813" rel="#L813">813</span>
<span id="L814" rel="#L814">814</span>
<span id="L815" rel="#L815">815</span>
<span id="L816" rel="#L816">816</span>
<span id="L817" rel="#L817">817</span>
<span id="L818" rel="#L818">818</span>
<span id="L819" rel="#L819">819</span>
<span id="L820" rel="#L820">820</span>
<span id="L821" rel="#L821">821</span>
<span id="L822" rel="#L822">822</span>
<span id="L823" rel="#L823">823</span>
<span id="L824" rel="#L824">824</span>
<span id="L825" rel="#L825">825</span>
<span id="L826" rel="#L826">826</span>
<span id="L827" rel="#L827">827</span>
<span id="L828" rel="#L828">828</span>
<span id="L829" rel="#L829">829</span>
<span id="L830" rel="#L830">830</span>
<span id="L831" rel="#L831">831</span>
<span id="L832" rel="#L832">832</span>
<span id="L833" rel="#L833">833</span>
<span id="L834" rel="#L834">834</span>
<span id="L835" rel="#L835">835</span>
<span id="L836" rel="#L836">836</span>
<span id="L837" rel="#L837">837</span>
<span id="L838" rel="#L838">838</span>
<span id="L839" rel="#L839">839</span>
<span id="L840" rel="#L840">840</span>
<span id="L841" rel="#L841">841</span>
<span id="L842" rel="#L842">842</span>
<span id="L843" rel="#L843">843</span>
<span id="L844" rel="#L844">844</span>
<span id="L845" rel="#L845">845</span>
<span id="L846" rel="#L846">846</span>
<span id="L847" rel="#L847">847</span>
<span id="L848" rel="#L848">848</span>
<span id="L849" rel="#L849">849</span>
<span id="L850" rel="#L850">850</span>
<span id="L851" rel="#L851">851</span>
<span id="L852" rel="#L852">852</span>
<span id="L853" rel="#L853">853</span>
<span id="L854" rel="#L854">854</span>
<span id="L855" rel="#L855">855</span>
<span id="L856" rel="#L856">856</span>
<span id="L857" rel="#L857">857</span>
<span id="L858" rel="#L858">858</span>
<span id="L859" rel="#L859">859</span>
<span id="L860" rel="#L860">860</span>
<span id="L861" rel="#L861">861</span>
<span id="L862" rel="#L862">862</span>
<span id="L863" rel="#L863">863</span>
<span id="L864" rel="#L864">864</span>
<span id="L865" rel="#L865">865</span>
<span id="L866" rel="#L866">866</span>
<span id="L867" rel="#L867">867</span>
<span id="L868" rel="#L868">868</span>
<span id="L869" rel="#L869">869</span>
<span id="L870" rel="#L870">870</span>
<span id="L871" rel="#L871">871</span>
<span id="L872" rel="#L872">872</span>
<span id="L873" rel="#L873">873</span>
<span id="L874" rel="#L874">874</span>
<span id="L875" rel="#L875">875</span>
<span id="L876" rel="#L876">876</span>
<span id="L877" rel="#L877">877</span>
<span id="L878" rel="#L878">878</span>
<span id="L879" rel="#L879">879</span>
<span id="L880" rel="#L880">880</span>
<span id="L881" rel="#L881">881</span>
<span id="L882" rel="#L882">882</span>
<span id="L883" rel="#L883">883</span>
<span id="L884" rel="#L884">884</span>
<span id="L885" rel="#L885">885</span>
<span id="L886" rel="#L886">886</span>
<span id="L887" rel="#L887">887</span>
<span id="L888" rel="#L888">888</span>
<span id="L889" rel="#L889">889</span>
<span id="L890" rel="#L890">890</span>
<span id="L891" rel="#L891">891</span>
<span id="L892" rel="#L892">892</span>
<span id="L893" rel="#L893">893</span>
<span id="L894" rel="#L894">894</span>
<span id="L895" rel="#L895">895</span>
<span id="L896" rel="#L896">896</span>
<span id="L897" rel="#L897">897</span>
<span id="L898" rel="#L898">898</span>
<span id="L899" rel="#L899">899</span>
<span id="L900" rel="#L900">900</span>
<span id="L901" rel="#L901">901</span>
<span id="L902" rel="#L902">902</span>
<span id="L903" rel="#L903">903</span>
<span id="L904" rel="#L904">904</span>
<span id="L905" rel="#L905">905</span>
<span id="L906" rel="#L906">906</span>
<span id="L907" rel="#L907">907</span>
<span id="L908" rel="#L908">908</span>
<span id="L909" rel="#L909">909</span>
<span id="L910" rel="#L910">910</span>
<span id="L911" rel="#L911">911</span>
<span id="L912" rel="#L912">912</span>
<span id="L913" rel="#L913">913</span>
<span id="L914" rel="#L914">914</span>
<span id="L915" rel="#L915">915</span>
<span id="L916" rel="#L916">916</span>
<span id="L917" rel="#L917">917</span>
<span id="L918" rel="#L918">918</span>
<span id="L919" rel="#L919">919</span>
<span id="L920" rel="#L920">920</span>
<span id="L921" rel="#L921">921</span>
<span id="L922" rel="#L922">922</span>
<span id="L923" rel="#L923">923</span>
<span id="L924" rel="#L924">924</span>
<span id="L925" rel="#L925">925</span>
<span id="L926" rel="#L926">926</span>
<span id="L927" rel="#L927">927</span>
<span id="L928" rel="#L928">928</span>
<span id="L929" rel="#L929">929</span>
<span id="L930" rel="#L930">930</span>
<span id="L931" rel="#L931">931</span>
<span id="L932" rel="#L932">932</span>
<span id="L933" rel="#L933">933</span>
<span id="L934" rel="#L934">934</span>
<span id="L935" rel="#L935">935</span>
<span id="L936" rel="#L936">936</span>
<span id="L937" rel="#L937">937</span>
<span id="L938" rel="#L938">938</span>
<span id="L939" rel="#L939">939</span>
<span id="L940" rel="#L940">940</span>
<span id="L941" rel="#L941">941</span>
<span id="L942" rel="#L942">942</span>
<span id="L943" rel="#L943">943</span>
<span id="L944" rel="#L944">944</span>
<span id="L945" rel="#L945">945</span>
<span id="L946" rel="#L946">946</span>
<span id="L947" rel="#L947">947</span>
<span id="L948" rel="#L948">948</span>
<span id="L949" rel="#L949">949</span>
<span id="L950" rel="#L950">950</span>
<span id="L951" rel="#L951">951</span>
<span id="L952" rel="#L952">952</span>
<span id="L953" rel="#L953">953</span>
<span id="L954" rel="#L954">954</span>
<span id="L955" rel="#L955">955</span>
<span id="L956" rel="#L956">956</span>
<span id="L957" rel="#L957">957</span>
<span id="L958" rel="#L958">958</span>
<span id="L959" rel="#L959">959</span>
<span id="L960" rel="#L960">960</span>
<span id="L961" rel="#L961">961</span>
<span id="L962" rel="#L962">962</span>
<span id="L963" rel="#L963">963</span>
<span id="L964" rel="#L964">964</span>
<span id="L965" rel="#L965">965</span>
<span id="L966" rel="#L966">966</span>
<span id="L967" rel="#L967">967</span>
<span id="L968" rel="#L968">968</span>
<span id="L969" rel="#L969">969</span>
<span id="L970" rel="#L970">970</span>
<span id="L971" rel="#L971">971</span>
<span id="L972" rel="#L972">972</span>
<span id="L973" rel="#L973">973</span>
<span id="L974" rel="#L974">974</span>
<span id="L975" rel="#L975">975</span>
<span id="L976" rel="#L976">976</span>
<span id="L977" rel="#L977">977</span>
<span id="L978" rel="#L978">978</span>
<span id="L979" rel="#L979">979</span>
<span id="L980" rel="#L980">980</span>
<span id="L981" rel="#L981">981</span>
<span id="L982" rel="#L982">982</span>
<span id="L983" rel="#L983">983</span>
<span id="L984" rel="#L984">984</span>
<span id="L985" rel="#L985">985</span>
<span id="L986" rel="#L986">986</span>
<span id="L987" rel="#L987">987</span>
<span id="L988" rel="#L988">988</span>
<span id="L989" rel="#L989">989</span>
<span id="L990" rel="#L990">990</span>
<span id="L991" rel="#L991">991</span>
<span id="L992" rel="#L992">992</span>
<span id="L993" rel="#L993">993</span>
<span id="L994" rel="#L994">994</span>
<span id="L995" rel="#L995">995</span>
<span id="L996" rel="#L996">996</span>
<span id="L997" rel="#L997">997</span>
<span id="L998" rel="#L998">998</span>
<span id="L999" rel="#L999">999</span>
<span id="L1000" rel="#L1000">1000</span>
<span id="L1001" rel="#L1001">1001</span>
<span id="L1002" rel="#L1002">1002</span>
<span id="L1003" rel="#L1003">1003</span>
<span id="L1004" rel="#L1004">1004</span>
<span id="L1005" rel="#L1005">1005</span>
<span id="L1006" rel="#L1006">1006</span>
<span id="L1007" rel="#L1007">1007</span>
<span id="L1008" rel="#L1008">1008</span>
<span id="L1009" rel="#L1009">1009</span>
<span id="L1010" rel="#L1010">1010</span>
<span id="L1011" rel="#L1011">1011</span>
<span id="L1012" rel="#L1012">1012</span>
<span id="L1013" rel="#L1013">1013</span>
<span id="L1014" rel="#L1014">1014</span>
<span id="L1015" rel="#L1015">1015</span>
<span id="L1016" rel="#L1016">1016</span>
<span id="L1017" rel="#L1017">1017</span>
<span id="L1018" rel="#L1018">1018</span>
<span id="L1019" rel="#L1019">1019</span>
<span id="L1020" rel="#L1020">1020</span>
<span id="L1021" rel="#L1021">1021</span>
<span id="L1022" rel="#L1022">1022</span>
<span id="L1023" rel="#L1023">1023</span>
<span id="L1024" rel="#L1024">1024</span>
<span id="L1025" rel="#L1025">1025</span>
<span id="L1026" rel="#L1026">1026</span>
<span id="L1027" rel="#L1027">1027</span>
<span id="L1028" rel="#L1028">1028</span>
<span id="L1029" rel="#L1029">1029</span>
<span id="L1030" rel="#L1030">1030</span>
<span id="L1031" rel="#L1031">1031</span>
<span id="L1032" rel="#L1032">1032</span>
<span id="L1033" rel="#L1033">1033</span>
<span id="L1034" rel="#L1034">1034</span>
<span id="L1035" rel="#L1035">1035</span>
<span id="L1036" rel="#L1036">1036</span>
<span id="L1037" rel="#L1037">1037</span>
<span id="L1038" rel="#L1038">1038</span>
<span id="L1039" rel="#L1039">1039</span>
<span id="L1040" rel="#L1040">1040</span>
<span id="L1041" rel="#L1041">1041</span>
<span id="L1042" rel="#L1042">1042</span>
<span id="L1043" rel="#L1043">1043</span>
<span id="L1044" rel="#L1044">1044</span>
<span id="L1045" rel="#L1045">1045</span>
<span id="L1046" rel="#L1046">1046</span>
<span id="L1047" rel="#L1047">1047</span>
<span id="L1048" rel="#L1048">1048</span>
<span id="L1049" rel="#L1049">1049</span>
<span id="L1050" rel="#L1050">1050</span>
<span id="L1051" rel="#L1051">1051</span>
<span id="L1052" rel="#L1052">1052</span>
<span id="L1053" rel="#L1053">1053</span>
<span id="L1054" rel="#L1054">1054</span>
<span id="L1055" rel="#L1055">1055</span>
<span id="L1056" rel="#L1056">1056</span>
<span id="L1057" rel="#L1057">1057</span>
<span id="L1058" rel="#L1058">1058</span>
<span id="L1059" rel="#L1059">1059</span>
<span id="L1060" rel="#L1060">1060</span>
<span id="L1061" rel="#L1061">1061</span>
<span id="L1062" rel="#L1062">1062</span>
<span id="L1063" rel="#L1063">1063</span>
<span id="L1064" rel="#L1064">1064</span>
<span id="L1065" rel="#L1065">1065</span>
<span id="L1066" rel="#L1066">1066</span>
<span id="L1067" rel="#L1067">1067</span>
<span id="L1068" rel="#L1068">1068</span>
<span id="L1069" rel="#L1069">1069</span>
<span id="L1070" rel="#L1070">1070</span>
<span id="L1071" rel="#L1071">1071</span>
<span id="L1072" rel="#L1072">1072</span>
<span id="L1073" rel="#L1073">1073</span>
<span id="L1074" rel="#L1074">1074</span>
<span id="L1075" rel="#L1075">1075</span>
<span id="L1076" rel="#L1076">1076</span>
<span id="L1077" rel="#L1077">1077</span>
<span id="L1078" rel="#L1078">1078</span>
<span id="L1079" rel="#L1079">1079</span>
<span id="L1080" rel="#L1080">1080</span>
<span id="L1081" rel="#L1081">1081</span>
<span id="L1082" rel="#L1082">1082</span>
<span id="L1083" rel="#L1083">1083</span>
<span id="L1084" rel="#L1084">1084</span>
<span id="L1085" rel="#L1085">1085</span>
<span id="L1086" rel="#L1086">1086</span>
<span id="L1087" rel="#L1087">1087</span>
<span id="L1088" rel="#L1088">1088</span>
<span id="L1089" rel="#L1089">1089</span>
<span id="L1090" rel="#L1090">1090</span>
<span id="L1091" rel="#L1091">1091</span>
<span id="L1092" rel="#L1092">1092</span>
<span id="L1093" rel="#L1093">1093</span>
<span id="L1094" rel="#L1094">1094</span>
<span id="L1095" rel="#L1095">1095</span>
<span id="L1096" rel="#L1096">1096</span>
<span id="L1097" rel="#L1097">1097</span>
<span id="L1098" rel="#L1098">1098</span>
<span id="L1099" rel="#L1099">1099</span>
<span id="L1100" rel="#L1100">1100</span>
<span id="L1101" rel="#L1101">1101</span>
<span id="L1102" rel="#L1102">1102</span>
<span id="L1103" rel="#L1103">1103</span>
<span id="L1104" rel="#L1104">1104</span>
<span id="L1105" rel="#L1105">1105</span>
<span id="L1106" rel="#L1106">1106</span>
<span id="L1107" rel="#L1107">1107</span>
<span id="L1108" rel="#L1108">1108</span>
<span id="L1109" rel="#L1109">1109</span>
<span id="L1110" rel="#L1110">1110</span>
<span id="L1111" rel="#L1111">1111</span>
<span id="L1112" rel="#L1112">1112</span>
<span id="L1113" rel="#L1113">1113</span>
<span id="L1114" rel="#L1114">1114</span>
<span id="L1115" rel="#L1115">1115</span>
<span id="L1116" rel="#L1116">1116</span>
<span id="L1117" rel="#L1117">1117</span>
<span id="L1118" rel="#L1118">1118</span>
<span id="L1119" rel="#L1119">1119</span>
<span id="L1120" rel="#L1120">1120</span>
<span id="L1121" rel="#L1121">1121</span>
<span id="L1122" rel="#L1122">1122</span>
<span id="L1123" rel="#L1123">1123</span>
<span id="L1124" rel="#L1124">1124</span>
<span id="L1125" rel="#L1125">1125</span>
<span id="L1126" rel="#L1126">1126</span>
<span id="L1127" rel="#L1127">1127</span>
<span id="L1128" rel="#L1128">1128</span>
<span id="L1129" rel="#L1129">1129</span>
<span id="L1130" rel="#L1130">1130</span>
<span id="L1131" rel="#L1131">1131</span>
<span id="L1132" rel="#L1132">1132</span>
<span id="L1133" rel="#L1133">1133</span>
<span id="L1134" rel="#L1134">1134</span>
<span id="L1135" rel="#L1135">1135</span>
<span id="L1136" rel="#L1136">1136</span>
<span id="L1137" rel="#L1137">1137</span>
<span id="L1138" rel="#L1138">1138</span>
<span id="L1139" rel="#L1139">1139</span>
<span id="L1140" rel="#L1140">1140</span>
<span id="L1141" rel="#L1141">1141</span>
<span id="L1142" rel="#L1142">1142</span>
<span id="L1143" rel="#L1143">1143</span>
<span id="L1144" rel="#L1144">1144</span>
<span id="L1145" rel="#L1145">1145</span>
<span id="L1146" rel="#L1146">1146</span>
<span id="L1147" rel="#L1147">1147</span>
<span id="L1148" rel="#L1148">1148</span>
<span id="L1149" rel="#L1149">1149</span>
<span id="L1150" rel="#L1150">1150</span>
<span id="L1151" rel="#L1151">1151</span>
<span id="L1152" rel="#L1152">1152</span>
<span id="L1153" rel="#L1153">1153</span>
<span id="L1154" rel="#L1154">1154</span>
<span id="L1155" rel="#L1155">1155</span>
<span id="L1156" rel="#L1156">1156</span>
<span id="L1157" rel="#L1157">1157</span>
<span id="L1158" rel="#L1158">1158</span>
<span id="L1159" rel="#L1159">1159</span>
<span id="L1160" rel="#L1160">1160</span>
<span id="L1161" rel="#L1161">1161</span>
<span id="L1162" rel="#L1162">1162</span>
<span id="L1163" rel="#L1163">1163</span>
<span id="L1164" rel="#L1164">1164</span>
<span id="L1165" rel="#L1165">1165</span>
<span id="L1166" rel="#L1166">1166</span>
<span id="L1167" rel="#L1167">1167</span>
<span id="L1168" rel="#L1168">1168</span>
<span id="L1169" rel="#L1169">1169</span>
<span id="L1170" rel="#L1170">1170</span>
<span id="L1171" rel="#L1171">1171</span>
<span id="L1172" rel="#L1172">1172</span>
<span id="L1173" rel="#L1173">1173</span>
<span id="L1174" rel="#L1174">1174</span>
<span id="L1175" rel="#L1175">1175</span>
<span id="L1176" rel="#L1176">1176</span>
<span id="L1177" rel="#L1177">1177</span>
<span id="L1178" rel="#L1178">1178</span>
<span id="L1179" rel="#L1179">1179</span>
<span id="L1180" rel="#L1180">1180</span>
<span id="L1181" rel="#L1181">1181</span>
<span id="L1182" rel="#L1182">1182</span>
<span id="L1183" rel="#L1183">1183</span>
<span id="L1184" rel="#L1184">1184</span>
<span id="L1185" rel="#L1185">1185</span>
<span id="L1186" rel="#L1186">1186</span>
<span id="L1187" rel="#L1187">1187</span>
<span id="L1188" rel="#L1188">1188</span>
<span id="L1189" rel="#L1189">1189</span>
<span id="L1190" rel="#L1190">1190</span>
<span id="L1191" rel="#L1191">1191</span>
<span id="L1192" rel="#L1192">1192</span>
<span id="L1193" rel="#L1193">1193</span>
<span id="L1194" rel="#L1194">1194</span>
<span id="L1195" rel="#L1195">1195</span>
<span id="L1196" rel="#L1196">1196</span>
<span id="L1197" rel="#L1197">1197</span>
<span id="L1198" rel="#L1198">1198</span>
<span id="L1199" rel="#L1199">1199</span>
<span id="L1200" rel="#L1200">1200</span>
<span id="L1201" rel="#L1201">1201</span>
<span id="L1202" rel="#L1202">1202</span>
<span id="L1203" rel="#L1203">1203</span>
<span id="L1204" rel="#L1204">1204</span>
<span id="L1205" rel="#L1205">1205</span>
<span id="L1206" rel="#L1206">1206</span>
<span id="L1207" rel="#L1207">1207</span>
<span id="L1208" rel="#L1208">1208</span>
<span id="L1209" rel="#L1209">1209</span>
<span id="L1210" rel="#L1210">1210</span>
<span id="L1211" rel="#L1211">1211</span>
<span id="L1212" rel="#L1212">1212</span>
<span id="L1213" rel="#L1213">1213</span>
<span id="L1214" rel="#L1214">1214</span>
<span id="L1215" rel="#L1215">1215</span>
<span id="L1216" rel="#L1216">1216</span>
<span id="L1217" rel="#L1217">1217</span>
<span id="L1218" rel="#L1218">1218</span>
<span id="L1219" rel="#L1219">1219</span>
<span id="L1220" rel="#L1220">1220</span>
<span id="L1221" rel="#L1221">1221</span>
<span id="L1222" rel="#L1222">1222</span>
<span id="L1223" rel="#L1223">1223</span>
<span id="L1224" rel="#L1224">1224</span>
<span id="L1225" rel="#L1225">1225</span>
<span id="L1226" rel="#L1226">1226</span>
<span id="L1227" rel="#L1227">1227</span>
<span id="L1228" rel="#L1228">1228</span>
<span id="L1229" rel="#L1229">1229</span>
<span id="L1230" rel="#L1230">1230</span>
<span id="L1231" rel="#L1231">1231</span>
<span id="L1232" rel="#L1232">1232</span>
<span id="L1233" rel="#L1233">1233</span>
<span id="L1234" rel="#L1234">1234</span>
<span id="L1235" rel="#L1235">1235</span>
<span id="L1236" rel="#L1236">1236</span>
<span id="L1237" rel="#L1237">1237</span>
<span id="L1238" rel="#L1238">1238</span>
<span id="L1239" rel="#L1239">1239</span>
<span id="L1240" rel="#L1240">1240</span>
<span id="L1241" rel="#L1241">1241</span>
<span id="L1242" rel="#L1242">1242</span>
<span id="L1243" rel="#L1243">1243</span>
<span id="L1244" rel="#L1244">1244</span>
<span id="L1245" rel="#L1245">1245</span>
<span id="L1246" rel="#L1246">1246</span>
<span id="L1247" rel="#L1247">1247</span>
<span id="L1248" rel="#L1248">1248</span>
<span id="L1249" rel="#L1249">1249</span>
<span id="L1250" rel="#L1250">1250</span>
<span id="L1251" rel="#L1251">1251</span>
<span id="L1252" rel="#L1252">1252</span>
<span id="L1253" rel="#L1253">1253</span>
<span id="L1254" rel="#L1254">1254</span>
<span id="L1255" rel="#L1255">1255</span>
<span id="L1256" rel="#L1256">1256</span>
<span id="L1257" rel="#L1257">1257</span>
<span id="L1258" rel="#L1258">1258</span>
<span id="L1259" rel="#L1259">1259</span>
<span id="L1260" rel="#L1260">1260</span>
<span id="L1261" rel="#L1261">1261</span>
<span id="L1262" rel="#L1262">1262</span>
<span id="L1263" rel="#L1263">1263</span>
<span id="L1264" rel="#L1264">1264</span>
<span id="L1265" rel="#L1265">1265</span>
<span id="L1266" rel="#L1266">1266</span>
<span id="L1267" rel="#L1267">1267</span>
<span id="L1268" rel="#L1268">1268</span>
<span id="L1269" rel="#L1269">1269</span>
<span id="L1270" rel="#L1270">1270</span>
<span id="L1271" rel="#L1271">1271</span>
<span id="L1272" rel="#L1272">1272</span>
<span id="L1273" rel="#L1273">1273</span>
<span id="L1274" rel="#L1274">1274</span>
<span id="L1275" rel="#L1275">1275</span>
<span id="L1276" rel="#L1276">1276</span>
<span id="L1277" rel="#L1277">1277</span>
<span id="L1278" rel="#L1278">1278</span>
<span id="L1279" rel="#L1279">1279</span>
<span id="L1280" rel="#L1280">1280</span>
<span id="L1281" rel="#L1281">1281</span>
<span id="L1282" rel="#L1282">1282</span>
<span id="L1283" rel="#L1283">1283</span>
<span id="L1284" rel="#L1284">1284</span>
<span id="L1285" rel="#L1285">1285</span>
<span id="L1286" rel="#L1286">1286</span>
<span id="L1287" rel="#L1287">1287</span>
<span id="L1288" rel="#L1288">1288</span>
<span id="L1289" rel="#L1289">1289</span>
<span id="L1290" rel="#L1290">1290</span>
<span id="L1291" rel="#L1291">1291</span>
<span id="L1292" rel="#L1292">1292</span>
<span id="L1293" rel="#L1293">1293</span>
<span id="L1294" rel="#L1294">1294</span>
<span id="L1295" rel="#L1295">1295</span>
<span id="L1296" rel="#L1296">1296</span>
<span id="L1297" rel="#L1297">1297</span>
<span id="L1298" rel="#L1298">1298</span>
<span id="L1299" rel="#L1299">1299</span>
<span id="L1300" rel="#L1300">1300</span>
<span id="L1301" rel="#L1301">1301</span>
<span id="L1302" rel="#L1302">1302</span>
<span id="L1303" rel="#L1303">1303</span>
<span id="L1304" rel="#L1304">1304</span>
<span id="L1305" rel="#L1305">1305</span>
<span id="L1306" rel="#L1306">1306</span>
<span id="L1307" rel="#L1307">1307</span>
<span id="L1308" rel="#L1308">1308</span>
<span id="L1309" rel="#L1309">1309</span>
<span id="L1310" rel="#L1310">1310</span>
<span id="L1311" rel="#L1311">1311</span>
<span id="L1312" rel="#L1312">1312</span>
<span id="L1313" rel="#L1313">1313</span>
<span id="L1314" rel="#L1314">1314</span>
<span id="L1315" rel="#L1315">1315</span>
<span id="L1316" rel="#L1316">1316</span>
<span id="L1317" rel="#L1317">1317</span>
<span id="L1318" rel="#L1318">1318</span>
<span id="L1319" rel="#L1319">1319</span>
<span id="L1320" rel="#L1320">1320</span>
<span id="L1321" rel="#L1321">1321</span>
<span id="L1322" rel="#L1322">1322</span>
<span id="L1323" rel="#L1323">1323</span>
<span id="L1324" rel="#L1324">1324</span>
<span id="L1325" rel="#L1325">1325</span>
<span id="L1326" rel="#L1326">1326</span>
<span id="L1327" rel="#L1327">1327</span>
<span id="L1328" rel="#L1328">1328</span>
<span id="L1329" rel="#L1329">1329</span>
<span id="L1330" rel="#L1330">1330</span>
<span id="L1331" rel="#L1331">1331</span>
<span id="L1332" rel="#L1332">1332</span>
<span id="L1333" rel="#L1333">1333</span>
<span id="L1334" rel="#L1334">1334</span>
<span id="L1335" rel="#L1335">1335</span>
<span id="L1336" rel="#L1336">1336</span>
<span id="L1337" rel="#L1337">1337</span>
<span id="L1338" rel="#L1338">1338</span>
<span id="L1339" rel="#L1339">1339</span>
<span id="L1340" rel="#L1340">1340</span>
<span id="L1341" rel="#L1341">1341</span>
<span id="L1342" rel="#L1342">1342</span>
<span id="L1343" rel="#L1343">1343</span>
<span id="L1344" rel="#L1344">1344</span>
<span id="L1345" rel="#L1345">1345</span>
<span id="L1346" rel="#L1346">1346</span>
<span id="L1347" rel="#L1347">1347</span>
<span id="L1348" rel="#L1348">1348</span>
<span id="L1349" rel="#L1349">1349</span>
<span id="L1350" rel="#L1350">1350</span>
<span id="L1351" rel="#L1351">1351</span>
<span id="L1352" rel="#L1352">1352</span>
<span id="L1353" rel="#L1353">1353</span>
<span id="L1354" rel="#L1354">1354</span>
<span id="L1355" rel="#L1355">1355</span>
<span id="L1356" rel="#L1356">1356</span>
<span id="L1357" rel="#L1357">1357</span>
<span id="L1358" rel="#L1358">1358</span>
<span id="L1359" rel="#L1359">1359</span>
<span id="L1360" rel="#L1360">1360</span>
<span id="L1361" rel="#L1361">1361</span>
<span id="L1362" rel="#L1362">1362</span>
<span id="L1363" rel="#L1363">1363</span>
<span id="L1364" rel="#L1364">1364</span>
<span id="L1365" rel="#L1365">1365</span>
<span id="L1366" rel="#L1366">1366</span>
<span id="L1367" rel="#L1367">1367</span>
<span id="L1368" rel="#L1368">1368</span>
<span id="L1369" rel="#L1369">1369</span>
<span id="L1370" rel="#L1370">1370</span>
<span id="L1371" rel="#L1371">1371</span>
<span id="L1372" rel="#L1372">1372</span>
<span id="L1373" rel="#L1373">1373</span>
<span id="L1374" rel="#L1374">1374</span>
<span id="L1375" rel="#L1375">1375</span>
<span id="L1376" rel="#L1376">1376</span>
<span id="L1377" rel="#L1377">1377</span>
<span id="L1378" rel="#L1378">1378</span>
<span id="L1379" rel="#L1379">1379</span>
<span id="L1380" rel="#L1380">1380</span>
<span id="L1381" rel="#L1381">1381</span>
<span id="L1382" rel="#L1382">1382</span>
<span id="L1383" rel="#L1383">1383</span>
<span id="L1384" rel="#L1384">1384</span>
<span id="L1385" rel="#L1385">1385</span>
<span id="L1386" rel="#L1386">1386</span>
<span id="L1387" rel="#L1387">1387</span>
<span id="L1388" rel="#L1388">1388</span>
<span id="L1389" rel="#L1389">1389</span>
<span id="L1390" rel="#L1390">1390</span>
<span id="L1391" rel="#L1391">1391</span>
<span id="L1392" rel="#L1392">1392</span>
<span id="L1393" rel="#L1393">1393</span>
<span id="L1394" rel="#L1394">1394</span>
<span id="L1395" rel="#L1395">1395</span>
<span id="L1396" rel="#L1396">1396</span>
<span id="L1397" rel="#L1397">1397</span>
<span id="L1398" rel="#L1398">1398</span>
<span id="L1399" rel="#L1399">1399</span>
<span id="L1400" rel="#L1400">1400</span>
<span id="L1401" rel="#L1401">1401</span>
<span id="L1402" rel="#L1402">1402</span>
<span id="L1403" rel="#L1403">1403</span>
<span id="L1404" rel="#L1404">1404</span>
<span id="L1405" rel="#L1405">1405</span>
<span id="L1406" rel="#L1406">1406</span>
<span id="L1407" rel="#L1407">1407</span>
<span id="L1408" rel="#L1408">1408</span>
<span id="L1409" rel="#L1409">1409</span>
<span id="L1410" rel="#L1410">1410</span>
<span id="L1411" rel="#L1411">1411</span>
<span id="L1412" rel="#L1412">1412</span>
<span id="L1413" rel="#L1413">1413</span>
<span id="L1414" rel="#L1414">1414</span>
<span id="L1415" rel="#L1415">1415</span>
<span id="L1416" rel="#L1416">1416</span>
<span id="L1417" rel="#L1417">1417</span>
<span id="L1418" rel="#L1418">1418</span>
<span id="L1419" rel="#L1419">1419</span>
<span id="L1420" rel="#L1420">1420</span>
<span id="L1421" rel="#L1421">1421</span>
<span id="L1422" rel="#L1422">1422</span>
<span id="L1423" rel="#L1423">1423</span>
<span id="L1424" rel="#L1424">1424</span>
<span id="L1425" rel="#L1425">1425</span>
<span id="L1426" rel="#L1426">1426</span>
<span id="L1427" rel="#L1427">1427</span>
<span id="L1428" rel="#L1428">1428</span>
<span id="L1429" rel="#L1429">1429</span>
<span id="L1430" rel="#L1430">1430</span>
<span id="L1431" rel="#L1431">1431</span>
<span id="L1432" rel="#L1432">1432</span>
<span id="L1433" rel="#L1433">1433</span>
<span id="L1434" rel="#L1434">1434</span>
<span id="L1435" rel="#L1435">1435</span>
<span id="L1436" rel="#L1436">1436</span>
<span id="L1437" rel="#L1437">1437</span>
<span id="L1438" rel="#L1438">1438</span>
<span id="L1439" rel="#L1439">1439</span>
<span id="L1440" rel="#L1440">1440</span>
<span id="L1441" rel="#L1441">1441</span>
<span id="L1442" rel="#L1442">1442</span>
<span id="L1443" rel="#L1443">1443</span>
<span id="L1444" rel="#L1444">1444</span>
<span id="L1445" rel="#L1445">1445</span>
<span id="L1446" rel="#L1446">1446</span>
<span id="L1447" rel="#L1447">1447</span>
<span id="L1448" rel="#L1448">1448</span>
<span id="L1449" rel="#L1449">1449</span>
<span id="L1450" rel="#L1450">1450</span>
<span id="L1451" rel="#L1451">1451</span>
<span id="L1452" rel="#L1452">1452</span>
<span id="L1453" rel="#L1453">1453</span>
<span id="L1454" rel="#L1454">1454</span>
<span id="L1455" rel="#L1455">1455</span>
<span id="L1456" rel="#L1456">1456</span>
<span id="L1457" rel="#L1457">1457</span>
<span id="L1458" rel="#L1458">1458</span>
<span id="L1459" rel="#L1459">1459</span>
<span id="L1460" rel="#L1460">1460</span>
<span id="L1461" rel="#L1461">1461</span>
<span id="L1462" rel="#L1462">1462</span>
<span id="L1463" rel="#L1463">1463</span>
<span id="L1464" rel="#L1464">1464</span>
<span id="L1465" rel="#L1465">1465</span>
<span id="L1466" rel="#L1466">1466</span>
<span id="L1467" rel="#L1467">1467</span>
<span id="L1468" rel="#L1468">1468</span>
<span id="L1469" rel="#L1469">1469</span>
<span id="L1470" rel="#L1470">1470</span>
<span id="L1471" rel="#L1471">1471</span>
<span id="L1472" rel="#L1472">1472</span>
<span id="L1473" rel="#L1473">1473</span>
<span id="L1474" rel="#L1474">1474</span>
<span id="L1475" rel="#L1475">1475</span>
<span id="L1476" rel="#L1476">1476</span>
<span id="L1477" rel="#L1477">1477</span>
<span id="L1478" rel="#L1478">1478</span>
<span id="L1479" rel="#L1479">1479</span>
<span id="L1480" rel="#L1480">1480</span>
<span id="L1481" rel="#L1481">1481</span>
<span id="L1482" rel="#L1482">1482</span>
<span id="L1483" rel="#L1483">1483</span>
<span id="L1484" rel="#L1484">1484</span>
<span id="L1485" rel="#L1485">1485</span>
<span id="L1486" rel="#L1486">1486</span>
<span id="L1487" rel="#L1487">1487</span>
<span id="L1488" rel="#L1488">1488</span>
<span id="L1489" rel="#L1489">1489</span>
<span id="L1490" rel="#L1490">1490</span>
<span id="L1491" rel="#L1491">1491</span>
<span id="L1492" rel="#L1492">1492</span>
<span id="L1493" rel="#L1493">1493</span>
<span id="L1494" rel="#L1494">1494</span>
<span id="L1495" rel="#L1495">1495</span>
<span id="L1496" rel="#L1496">1496</span>
<span id="L1497" rel="#L1497">1497</span>
<span id="L1498" rel="#L1498">1498</span>
<span id="L1499" rel="#L1499">1499</span>
<span id="L1500" rel="#L1500">1500</span>
<span id="L1501" rel="#L1501">1501</span>
<span id="L1502" rel="#L1502">1502</span>
<span id="L1503" rel="#L1503">1503</span>
<span id="L1504" rel="#L1504">1504</span>
<span id="L1505" rel="#L1505">1505</span>
<span id="L1506" rel="#L1506">1506</span>
<span id="L1507" rel="#L1507">1507</span>
<span id="L1508" rel="#L1508">1508</span>
<span id="L1509" rel="#L1509">1509</span>
<span id="L1510" rel="#L1510">1510</span>
<span id="L1511" rel="#L1511">1511</span>
<span id="L1512" rel="#L1512">1512</span>
<span id="L1513" rel="#L1513">1513</span>
<span id="L1514" rel="#L1514">1514</span>
<span id="L1515" rel="#L1515">1515</span>
<span id="L1516" rel="#L1516">1516</span>
<span id="L1517" rel="#L1517">1517</span>
<span id="L1518" rel="#L1518">1518</span>
<span id="L1519" rel="#L1519">1519</span>
<span id="L1520" rel="#L1520">1520</span>
<span id="L1521" rel="#L1521">1521</span>
<span id="L1522" rel="#L1522">1522</span>
<span id="L1523" rel="#L1523">1523</span>
<span id="L1524" rel="#L1524">1524</span>
<span id="L1525" rel="#L1525">1525</span>
<span id="L1526" rel="#L1526">1526</span>
<span id="L1527" rel="#L1527">1527</span>
<span id="L1528" rel="#L1528">1528</span>
<span id="L1529" rel="#L1529">1529</span>
<span id="L1530" rel="#L1530">1530</span>
<span id="L1531" rel="#L1531">1531</span>
<span id="L1532" rel="#L1532">1532</span>
<span id="L1533" rel="#L1533">1533</span>
<span id="L1534" rel="#L1534">1534</span>
<span id="L1535" rel="#L1535">1535</span>
<span id="L1536" rel="#L1536">1536</span>
<span id="L1537" rel="#L1537">1537</span>
<span id="L1538" rel="#L1538">1538</span>
<span id="L1539" rel="#L1539">1539</span>
<span id="L1540" rel="#L1540">1540</span>
<span id="L1541" rel="#L1541">1541</span>
<span id="L1542" rel="#L1542">1542</span>
<span id="L1543" rel="#L1543">1543</span>
<span id="L1544" rel="#L1544">1544</span>
<span id="L1545" rel="#L1545">1545</span>
<span id="L1546" rel="#L1546">1546</span>
<span id="L1547" rel="#L1547">1547</span>
<span id="L1548" rel="#L1548">1548</span>
<span id="L1549" rel="#L1549">1549</span>
<span id="L1550" rel="#L1550">1550</span>
<span id="L1551" rel="#L1551">1551</span>
<span id="L1552" rel="#L1552">1552</span>
<span id="L1553" rel="#L1553">1553</span>
<span id="L1554" rel="#L1554">1554</span>
<span id="L1555" rel="#L1555">1555</span>
<span id="L1556" rel="#L1556">1556</span>
<span id="L1557" rel="#L1557">1557</span>
<span id="L1558" rel="#L1558">1558</span>
<span id="L1559" rel="#L1559">1559</span>
<span id="L1560" rel="#L1560">1560</span>
<span id="L1561" rel="#L1561">1561</span>
<span id="L1562" rel="#L1562">1562</span>
<span id="L1563" rel="#L1563">1563</span>
<span id="L1564" rel="#L1564">1564</span>
<span id="L1565" rel="#L1565">1565</span>
<span id="L1566" rel="#L1566">1566</span>
<span id="L1567" rel="#L1567">1567</span>
<span id="L1568" rel="#L1568">1568</span>
<span id="L1569" rel="#L1569">1569</span>
<span id="L1570" rel="#L1570">1570</span>
<span id="L1571" rel="#L1571">1571</span>
<span id="L1572" rel="#L1572">1572</span>
<span id="L1573" rel="#L1573">1573</span>
<span id="L1574" rel="#L1574">1574</span>
<span id="L1575" rel="#L1575">1575</span>
<span id="L1576" rel="#L1576">1576</span>
<span id="L1577" rel="#L1577">1577</span>
<span id="L1578" rel="#L1578">1578</span>
<span id="L1579" rel="#L1579">1579</span>
<span id="L1580" rel="#L1580">1580</span>
<span id="L1581" rel="#L1581">1581</span>
<span id="L1582" rel="#L1582">1582</span>
<span id="L1583" rel="#L1583">1583</span>
<span id="L1584" rel="#L1584">1584</span>
<span id="L1585" rel="#L1585">1585</span>
<span id="L1586" rel="#L1586">1586</span>
<span id="L1587" rel="#L1587">1587</span>
<span id="L1588" rel="#L1588">1588</span>
<span id="L1589" rel="#L1589">1589</span>
<span id="L1590" rel="#L1590">1590</span>
<span id="L1591" rel="#L1591">1591</span>
<span id="L1592" rel="#L1592">1592</span>
<span id="L1593" rel="#L1593">1593</span>
<span id="L1594" rel="#L1594">1594</span>
<span id="L1595" rel="#L1595">1595</span>
<span id="L1596" rel="#L1596">1596</span>
<span id="L1597" rel="#L1597">1597</span>
<span id="L1598" rel="#L1598">1598</span>
<span id="L1599" rel="#L1599">1599</span>
<span id="L1600" rel="#L1600">1600</span>
<span id="L1601" rel="#L1601">1601</span>
<span id="L1602" rel="#L1602">1602</span>
<span id="L1603" rel="#L1603">1603</span>
<span id="L1604" rel="#L1604">1604</span>
<span id="L1605" rel="#L1605">1605</span>
<span id="L1606" rel="#L1606">1606</span>
<span id="L1607" rel="#L1607">1607</span>
<span id="L1608" rel="#L1608">1608</span>
<span id="L1609" rel="#L1609">1609</span>
<span id="L1610" rel="#L1610">1610</span>
<span id="L1611" rel="#L1611">1611</span>
<span id="L1612" rel="#L1612">1612</span>
<span id="L1613" rel="#L1613">1613</span>
<span id="L1614" rel="#L1614">1614</span>
<span id="L1615" rel="#L1615">1615</span>
<span id="L1616" rel="#L1616">1616</span>
<span id="L1617" rel="#L1617">1617</span>
<span id="L1618" rel="#L1618">1618</span>
<span id="L1619" rel="#L1619">1619</span>
<span id="L1620" rel="#L1620">1620</span>
<span id="L1621" rel="#L1621">1621</span>
<span id="L1622" rel="#L1622">1622</span>
<span id="L1623" rel="#L1623">1623</span>
<span id="L1624" rel="#L1624">1624</span>
<span id="L1625" rel="#L1625">1625</span>
<span id="L1626" rel="#L1626">1626</span>
<span id="L1627" rel="#L1627">1627</span>
<span id="L1628" rel="#L1628">1628</span>
<span id="L1629" rel="#L1629">1629</span>
<span id="L1630" rel="#L1630">1630</span>
<span id="L1631" rel="#L1631">1631</span>
<span id="L1632" rel="#L1632">1632</span>
<span id="L1633" rel="#L1633">1633</span>
<span id="L1634" rel="#L1634">1634</span>
<span id="L1635" rel="#L1635">1635</span>
<span id="L1636" rel="#L1636">1636</span>
<span id="L1637" rel="#L1637">1637</span>
<span id="L1638" rel="#L1638">1638</span>
<span id="L1639" rel="#L1639">1639</span>
<span id="L1640" rel="#L1640">1640</span>
<span id="L1641" rel="#L1641">1641</span>
<span id="L1642" rel="#L1642">1642</span>
<span id="L1643" rel="#L1643">1643</span>
<span id="L1644" rel="#L1644">1644</span>
<span id="L1645" rel="#L1645">1645</span>
<span id="L1646" rel="#L1646">1646</span>
<span id="L1647" rel="#L1647">1647</span>
<span id="L1648" rel="#L1648">1648</span>
<span id="L1649" rel="#L1649">1649</span>
<span id="L1650" rel="#L1650">1650</span>
<span id="L1651" rel="#L1651">1651</span>
<span id="L1652" rel="#L1652">1652</span>
<span id="L1653" rel="#L1653">1653</span>
<span id="L1654" rel="#L1654">1654</span>
<span id="L1655" rel="#L1655">1655</span>
<span id="L1656" rel="#L1656">1656</span>
<span id="L1657" rel="#L1657">1657</span>
<span id="L1658" rel="#L1658">1658</span>
<span id="L1659" rel="#L1659">1659</span>
<span id="L1660" rel="#L1660">1660</span>
<span id="L1661" rel="#L1661">1661</span>
<span id="L1662" rel="#L1662">1662</span>
<span id="L1663" rel="#L1663">1663</span>
<span id="L1664" rel="#L1664">1664</span>
<span id="L1665" rel="#L1665">1665</span>
<span id="L1666" rel="#L1666">1666</span>
<span id="L1667" rel="#L1667">1667</span>
<span id="L1668" rel="#L1668">1668</span>
<span id="L1669" rel="#L1669">1669</span>
<span id="L1670" rel="#L1670">1670</span>
<span id="L1671" rel="#L1671">1671</span>
<span id="L1672" rel="#L1672">1672</span>
<span id="L1673" rel="#L1673">1673</span>
<span id="L1674" rel="#L1674">1674</span>
<span id="L1675" rel="#L1675">1675</span>
<span id="L1676" rel="#L1676">1676</span>
<span id="L1677" rel="#L1677">1677</span>
<span id="L1678" rel="#L1678">1678</span>
<span id="L1679" rel="#L1679">1679</span>
<span id="L1680" rel="#L1680">1680</span>
<span id="L1681" rel="#L1681">1681</span>
<span id="L1682" rel="#L1682">1682</span>
<span id="L1683" rel="#L1683">1683</span>
<span id="L1684" rel="#L1684">1684</span>
<span id="L1685" rel="#L1685">1685</span>
<span id="L1686" rel="#L1686">1686</span>
<span id="L1687" rel="#L1687">1687</span>
<span id="L1688" rel="#L1688">1688</span>
<span id="L1689" rel="#L1689">1689</span>
<span id="L1690" rel="#L1690">1690</span>
<span id="L1691" rel="#L1691">1691</span>
<span id="L1692" rel="#L1692">1692</span>
<span id="L1693" rel="#L1693">1693</span>
<span id="L1694" rel="#L1694">1694</span>
<span id="L1695" rel="#L1695">1695</span>
<span id="L1696" rel="#L1696">1696</span>
<span id="L1697" rel="#L1697">1697</span>
<span id="L1698" rel="#L1698">1698</span>
<span id="L1699" rel="#L1699">1699</span>
<span id="L1700" rel="#L1700">1700</span>
<span id="L1701" rel="#L1701">1701</span>
<span id="L1702" rel="#L1702">1702</span>
<span id="L1703" rel="#L1703">1703</span>
<span id="L1704" rel="#L1704">1704</span>
<span id="L1705" rel="#L1705">1705</span>
<span id="L1706" rel="#L1706">1706</span>
<span id="L1707" rel="#L1707">1707</span>
<span id="L1708" rel="#L1708">1708</span>
<span id="L1709" rel="#L1709">1709</span>
<span id="L1710" rel="#L1710">1710</span>
<span id="L1711" rel="#L1711">1711</span>
<span id="L1712" rel="#L1712">1712</span>
<span id="L1713" rel="#L1713">1713</span>
<span id="L1714" rel="#L1714">1714</span>
<span id="L1715" rel="#L1715">1715</span>
<span id="L1716" rel="#L1716">1716</span>
<span id="L1717" rel="#L1717">1717</span>
<span id="L1718" rel="#L1718">1718</span>
<span id="L1719" rel="#L1719">1719</span>
<span id="L1720" rel="#L1720">1720</span>
<span id="L1721" rel="#L1721">1721</span>
<span id="L1722" rel="#L1722">1722</span>
<span id="L1723" rel="#L1723">1723</span>
<span id="L1724" rel="#L1724">1724</span>
<span id="L1725" rel="#L1725">1725</span>
<span id="L1726" rel="#L1726">1726</span>
<span id="L1727" rel="#L1727">1727</span>
<span id="L1728" rel="#L1728">1728</span>
<span id="L1729" rel="#L1729">1729</span>
<span id="L1730" rel="#L1730">1730</span>
<span id="L1731" rel="#L1731">1731</span>
<span id="L1732" rel="#L1732">1732</span>
<span id="L1733" rel="#L1733">1733</span>
<span id="L1734" rel="#L1734">1734</span>
<span id="L1735" rel="#L1735">1735</span>
<span id="L1736" rel="#L1736">1736</span>
<span id="L1737" rel="#L1737">1737</span>
<span id="L1738" rel="#L1738">1738</span>
<span id="L1739" rel="#L1739">1739</span>
<span id="L1740" rel="#L1740">1740</span>
<span id="L1741" rel="#L1741">1741</span>
<span id="L1742" rel="#L1742">1742</span>
<span id="L1743" rel="#L1743">1743</span>
<span id="L1744" rel="#L1744">1744</span>
<span id="L1745" rel="#L1745">1745</span>
<span id="L1746" rel="#L1746">1746</span>
<span id="L1747" rel="#L1747">1747</span>
<span id="L1748" rel="#L1748">1748</span>
<span id="L1749" rel="#L1749">1749</span>
<span id="L1750" rel="#L1750">1750</span>
<span id="L1751" rel="#L1751">1751</span>
<span id="L1752" rel="#L1752">1752</span>
<span id="L1753" rel="#L1753">1753</span>
<span id="L1754" rel="#L1754">1754</span>
<span id="L1755" rel="#L1755">1755</span>
<span id="L1756" rel="#L1756">1756</span>
<span id="L1757" rel="#L1757">1757</span>
<span id="L1758" rel="#L1758">1758</span>
<span id="L1759" rel="#L1759">1759</span>
<span id="L1760" rel="#L1760">1760</span>
<span id="L1761" rel="#L1761">1761</span>
<span id="L1762" rel="#L1762">1762</span>
<span id="L1763" rel="#L1763">1763</span>
<span id="L1764" rel="#L1764">1764</span>
<span id="L1765" rel="#L1765">1765</span>
<span id="L1766" rel="#L1766">1766</span>
<span id="L1767" rel="#L1767">1767</span>
<span id="L1768" rel="#L1768">1768</span>
<span id="L1769" rel="#L1769">1769</span>
<span id="L1770" rel="#L1770">1770</span>
<span id="L1771" rel="#L1771">1771</span>
<span id="L1772" rel="#L1772">1772</span>
<span id="L1773" rel="#L1773">1773</span>
<span id="L1774" rel="#L1774">1774</span>
<span id="L1775" rel="#L1775">1775</span>
<span id="L1776" rel="#L1776">1776</span>
<span id="L1777" rel="#L1777">1777</span>
<span id="L1778" rel="#L1778">1778</span>
<span id="L1779" rel="#L1779">1779</span>
<span id="L1780" rel="#L1780">1780</span>
<span id="L1781" rel="#L1781">1781</span>
<span id="L1782" rel="#L1782">1782</span>
<span id="L1783" rel="#L1783">1783</span>
<span id="L1784" rel="#L1784">1784</span>
<span id="L1785" rel="#L1785">1785</span>
<span id="L1786" rel="#L1786">1786</span>
<span id="L1787" rel="#L1787">1787</span>
<span id="L1788" rel="#L1788">1788</span>
<span id="L1789" rel="#L1789">1789</span>
<span id="L1790" rel="#L1790">1790</span>
<span id="L1791" rel="#L1791">1791</span>
<span id="L1792" rel="#L1792">1792</span>
<span id="L1793" rel="#L1793">1793</span>
<span id="L1794" rel="#L1794">1794</span>
<span id="L1795" rel="#L1795">1795</span>
<span id="L1796" rel="#L1796">1796</span>
<span id="L1797" rel="#L1797">1797</span>
<span id="L1798" rel="#L1798">1798</span>
<span id="L1799" rel="#L1799">1799</span>
<span id="L1800" rel="#L1800">1800</span>
<span id="L1801" rel="#L1801">1801</span>
<span id="L1802" rel="#L1802">1802</span>
<span id="L1803" rel="#L1803">1803</span>
<span id="L1804" rel="#L1804">1804</span>
<span id="L1805" rel="#L1805">1805</span>
<span id="L1806" rel="#L1806">1806</span>
<span id="L1807" rel="#L1807">1807</span>
<span id="L1808" rel="#L1808">1808</span>
<span id="L1809" rel="#L1809">1809</span>
<span id="L1810" rel="#L1810">1810</span>
<span id="L1811" rel="#L1811">1811</span>
<span id="L1812" rel="#L1812">1812</span>
<span id="L1813" rel="#L1813">1813</span>
<span id="L1814" rel="#L1814">1814</span>
<span id="L1815" rel="#L1815">1815</span>
<span id="L1816" rel="#L1816">1816</span>
<span id="L1817" rel="#L1817">1817</span>
<span id="L1818" rel="#L1818">1818</span>
<span id="L1819" rel="#L1819">1819</span>
<span id="L1820" rel="#L1820">1820</span>
<span id="L1821" rel="#L1821">1821</span>
<span id="L1822" rel="#L1822">1822</span>
<span id="L1823" rel="#L1823">1823</span>
<span id="L1824" rel="#L1824">1824</span>
<span id="L1825" rel="#L1825">1825</span>
<span id="L1826" rel="#L1826">1826</span>
<span id="L1827" rel="#L1827">1827</span>
<span id="L1828" rel="#L1828">1828</span>
<span id="L1829" rel="#L1829">1829</span>
<span id="L1830" rel="#L1830">1830</span>
<span id="L1831" rel="#L1831">1831</span>
<span id="L1832" rel="#L1832">1832</span>
<span id="L1833" rel="#L1833">1833</span>
<span id="L1834" rel="#L1834">1834</span>
<span id="L1835" rel="#L1835">1835</span>
<span id="L1836" rel="#L1836">1836</span>
<span id="L1837" rel="#L1837">1837</span>
<span id="L1838" rel="#L1838">1838</span>
<span id="L1839" rel="#L1839">1839</span>
<span id="L1840" rel="#L1840">1840</span>
<span id="L1841" rel="#L1841">1841</span>
<span id="L1842" rel="#L1842">1842</span>
<span id="L1843" rel="#L1843">1843</span>
<span id="L1844" rel="#L1844">1844</span>
<span id="L1845" rel="#L1845">1845</span>
<span id="L1846" rel="#L1846">1846</span>
<span id="L1847" rel="#L1847">1847</span>
<span id="L1848" rel="#L1848">1848</span>
<span id="L1849" rel="#L1849">1849</span>
<span id="L1850" rel="#L1850">1850</span>
<span id="L1851" rel="#L1851">1851</span>
<span id="L1852" rel="#L1852">1852</span>
<span id="L1853" rel="#L1853">1853</span>
<span id="L1854" rel="#L1854">1854</span>
<span id="L1855" rel="#L1855">1855</span>
<span id="L1856" rel="#L1856">1856</span>
<span id="L1857" rel="#L1857">1857</span>
<span id="L1858" rel="#L1858">1858</span>
<span id="L1859" rel="#L1859">1859</span>
<span id="L1860" rel="#L1860">1860</span>
<span id="L1861" rel="#L1861">1861</span>
<span id="L1862" rel="#L1862">1862</span>
<span id="L1863" rel="#L1863">1863</span>
<span id="L1864" rel="#L1864">1864</span>
<span id="L1865" rel="#L1865">1865</span>
<span id="L1866" rel="#L1866">1866</span>
<span id="L1867" rel="#L1867">1867</span>
<span id="L1868" rel="#L1868">1868</span>
<span id="L1869" rel="#L1869">1869</span>
<span id="L1870" rel="#L1870">1870</span>
<span id="L1871" rel="#L1871">1871</span>
<span id="L1872" rel="#L1872">1872</span>
<span id="L1873" rel="#L1873">1873</span>
<span id="L1874" rel="#L1874">1874</span>
<span id="L1875" rel="#L1875">1875</span>
<span id="L1876" rel="#L1876">1876</span>
<span id="L1877" rel="#L1877">1877</span>
<span id="L1878" rel="#L1878">1878</span>
<span id="L1879" rel="#L1879">1879</span>
<span id="L1880" rel="#L1880">1880</span>
<span id="L1881" rel="#L1881">1881</span>
<span id="L1882" rel="#L1882">1882</span>
<span id="L1883" rel="#L1883">1883</span>
<span id="L1884" rel="#L1884">1884</span>
<span id="L1885" rel="#L1885">1885</span>
<span id="L1886" rel="#L1886">1886</span>
<span id="L1887" rel="#L1887">1887</span>
<span id="L1888" rel="#L1888">1888</span>
<span id="L1889" rel="#L1889">1889</span>
<span id="L1890" rel="#L1890">1890</span>
<span id="L1891" rel="#L1891">1891</span>
<span id="L1892" rel="#L1892">1892</span>
<span id="L1893" rel="#L1893">1893</span>
<span id="L1894" rel="#L1894">1894</span>
<span id="L1895" rel="#L1895">1895</span>
<span id="L1896" rel="#L1896">1896</span>
<span id="L1897" rel="#L1897">1897</span>
<span id="L1898" rel="#L1898">1898</span>
<span id="L1899" rel="#L1899">1899</span>
<span id="L1900" rel="#L1900">1900</span>
<span id="L1901" rel="#L1901">1901</span>
<span id="L1902" rel="#L1902">1902</span>
<span id="L1903" rel="#L1903">1903</span>
<span id="L1904" rel="#L1904">1904</span>
<span id="L1905" rel="#L1905">1905</span>
<span id="L1906" rel="#L1906">1906</span>
<span id="L1907" rel="#L1907">1907</span>
<span id="L1908" rel="#L1908">1908</span>
<span id="L1909" rel="#L1909">1909</span>
<span id="L1910" rel="#L1910">1910</span>
<span id="L1911" rel="#L1911">1911</span>
<span id="L1912" rel="#L1912">1912</span>
<span id="L1913" rel="#L1913">1913</span>
<span id="L1914" rel="#L1914">1914</span>
<span id="L1915" rel="#L1915">1915</span>
<span id="L1916" rel="#L1916">1916</span>
<span id="L1917" rel="#L1917">1917</span>
<span id="L1918" rel="#L1918">1918</span>
<span id="L1919" rel="#L1919">1919</span>
<span id="L1920" rel="#L1920">1920</span>
<span id="L1921" rel="#L1921">1921</span>
<span id="L1922" rel="#L1922">1922</span>
<span id="L1923" rel="#L1923">1923</span>
<span id="L1924" rel="#L1924">1924</span>
<span id="L1925" rel="#L1925">1925</span>
<span id="L1926" rel="#L1926">1926</span>
<span id="L1927" rel="#L1927">1927</span>
<span id="L1928" rel="#L1928">1928</span>
<span id="L1929" rel="#L1929">1929</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*!</span></div><div class='line' id='LC2'><span class="cm"> * Sizzle CSS Selector Engine v@VERSION</span></div><div class='line' id='LC3'><span class="cm"> * http://sizzlejs.com/</span></div><div class='line' id='LC4'><span class="cm"> *</span></div><div class='line' id='LC5'><span class="cm"> * Copyright 2013 jQuery Foundation, Inc. and other contributors</span></div><div class='line' id='LC6'><span class="cm"> * Released under the MIT license</span></div><div class='line' id='LC7'><span class="cm"> * http://jquery.org/license</span></div><div class='line' id='LC8'><span class="cm"> *</span></div><div class='line' id='LC9'><span class="cm"> * Date: @DATE</span></div><div class='line' id='LC10'><span class="cm"> */</span></div><div class='line' id='LC11'><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nb">window</span><span class="p">,</span> <span class="kc">undefined</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC12'><br/></div><div class='line' id='LC13'><span class="kd">var</span> <span class="nx">i</span><span class="p">,</span></div><div class='line' id='LC14'>	<span class="nx">cachedruns</span><span class="p">,</span></div><div class='line' id='LC15'>	<span class="nx">Expr</span><span class="p">,</span></div><div class='line' id='LC16'>	<span class="nx">getText</span><span class="p">,</span></div><div class='line' id='LC17'>	<span class="nx">isXML</span><span class="p">,</span></div><div class='line' id='LC18'>	<span class="nx">compile</span><span class="p">,</span></div><div class='line' id='LC19'>	<span class="nx">outermostContext</span><span class="p">,</span></div><div class='line' id='LC20'>	<span class="nx">sortInput</span><span class="p">,</span></div><div class='line' id='LC21'><br/></div><div class='line' id='LC22'>	<span class="c1">// Local document vars</span></div><div class='line' id='LC23'>	<span class="nx">setDocument</span><span class="p">,</span></div><div class='line' id='LC24'>	<span class="nb">document</span><span class="p">,</span></div><div class='line' id='LC25'>	<span class="nx">docElem</span><span class="p">,</span></div><div class='line' id='LC26'>	<span class="nx">documentIsHTML</span><span class="p">,</span></div><div class='line' id='LC27'>	<span class="nx">rbuggyQSA</span><span class="p">,</span></div><div class='line' id='LC28'>	<span class="nx">rbuggyMatches</span><span class="p">,</span></div><div class='line' id='LC29'>	<span class="nx">matches</span><span class="p">,</span></div><div class='line' id='LC30'>	<span class="nx">contains</span><span class="p">,</span></div><div class='line' id='LC31'><br/></div><div class='line' id='LC32'>	<span class="c1">// Instance-specific data</span></div><div class='line' id='LC33'>	<span class="nx">expando</span> <span class="o">=</span> <span class="s2">&quot;sizzle&quot;</span> <span class="o">+</span> <span class="o">-</span><span class="p">(</span><span class="k">new</span> <span class="nb">Date</span><span class="p">()),</span></div><div class='line' id='LC34'>	<span class="nx">preferredDoc</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nb">document</span><span class="p">,</span></div><div class='line' id='LC35'>	<span class="nx">support</span> <span class="o">=</span> <span class="p">{},</span></div><div class='line' id='LC36'>	<span class="nx">dirruns</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC37'>	<span class="nx">done</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC38'>	<span class="nx">classCache</span> <span class="o">=</span> <span class="nx">createCache</span><span class="p">(),</span></div><div class='line' id='LC39'>	<span class="nx">tokenCache</span> <span class="o">=</span> <span class="nx">createCache</span><span class="p">(),</span></div><div class='line' id='LC40'>	<span class="nx">compilerCache</span> <span class="o">=</span> <span class="nx">createCache</span><span class="p">(),</span></div><div class='line' id='LC41'>	<span class="nx">hasDuplicate</span> <span class="o">=</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC42'>	<span class="nx">sortOrder</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span> <span class="k">return</span> <span class="mi">0</span><span class="p">;</span> <span class="p">},</span></div><div class='line' id='LC43'><br/></div><div class='line' id='LC44'>	<span class="c1">// General-purpose constants</span></div><div class='line' id='LC45'>	<span class="nx">strundefined</span> <span class="o">=</span> <span class="k">typeof</span> <span class="kc">undefined</span><span class="p">,</span></div><div class='line' id='LC46'>	<span class="nx">MAX_NEGATIVE</span> <span class="o">=</span> <span class="mi">1</span> <span class="o">&lt;&lt;</span> <span class="mi">31</span><span class="p">,</span></div><div class='line' id='LC47'><br/></div><div class='line' id='LC48'>	<span class="c1">// Array methods</span></div><div class='line' id='LC49'>	<span class="nx">arr</span> <span class="o">=</span> <span class="p">[],</span></div><div class='line' id='LC50'>	<span class="nx">pop</span> <span class="o">=</span> <span class="nx">arr</span><span class="p">.</span><span class="nx">pop</span><span class="p">,</span></div><div class='line' id='LC51'>	<span class="nx">push_native</span> <span class="o">=</span> <span class="nx">arr</span><span class="p">.</span><span class="nx">push</span><span class="p">,</span></div><div class='line' id='LC52'>	<span class="nx">push</span> <span class="o">=</span> <span class="nx">arr</span><span class="p">.</span><span class="nx">push</span><span class="p">,</span></div><div class='line' id='LC53'>	<span class="nx">slice</span> <span class="o">=</span> <span class="nx">arr</span><span class="p">.</span><span class="nx">slice</span><span class="p">,</span></div><div class='line' id='LC54'>	<span class="c1">// Use a stripped-down indexOf if we can&#39;t use a native one</span></div><div class='line' id='LC55'>	<span class="nx">indexOf</span> <span class="o">=</span> <span class="nx">arr</span><span class="p">.</span><span class="nx">indexOf</span> <span class="o">||</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC56'>		<span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC57'>			<span class="nx">len</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC58'>		<span class="k">for</span> <span class="p">(</span> <span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC59'>			<span class="k">if</span> <span class="p">(</span> <span class="k">this</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">===</span> <span class="nx">elem</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC60'>				<span class="k">return</span> <span class="nx">i</span><span class="p">;</span></div><div class='line' id='LC61'>			<span class="p">}</span></div><div class='line' id='LC62'>		<span class="p">}</span></div><div class='line' id='LC63'>		<span class="k">return</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC64'>	<span class="p">},</span></div><div class='line' id='LC65'><br/></div><div class='line' id='LC66'>	<span class="nx">booleans</span> <span class="o">=</span> <span class="s2">&quot;checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped&quot;</span><span class="p">,</span></div><div class='line' id='LC67'><br/></div><div class='line' id='LC68'>	<span class="c1">// Regular expressions</span></div><div class='line' id='LC69'><br/></div><div class='line' id='LC70'>	<span class="c1">// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace</span></div><div class='line' id='LC71'>	<span class="nx">whitespace</span> <span class="o">=</span> <span class="s2">&quot;[\\x20\\t\\r\\n\\f]&quot;</span><span class="p">,</span></div><div class='line' id='LC72'>	<span class="c1">// http://www.w3.org/TR/css3-syntax/#characters</span></div><div class='line' id='LC73'>	<span class="nx">characterEncoding</span> <span class="o">=</span> <span class="s2">&quot;(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+&quot;</span><span class="p">,</span></div><div class='line' id='LC74'><br/></div><div class='line' id='LC75'>	<span class="c1">// Loosely modeled on CSS identifier characters</span></div><div class='line' id='LC76'>	<span class="c1">// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors</span></div><div class='line' id='LC77'>	<span class="c1">// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier</span></div><div class='line' id='LC78'>	<span class="nx">identifier</span> <span class="o">=</span> <span class="nx">characterEncoding</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="s2">&quot;w&quot;</span><span class="p">,</span> <span class="s2">&quot;w#&quot;</span> <span class="p">),</span></div><div class='line' id='LC79'><br/></div><div class='line' id='LC80'>	<span class="c1">// Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors</span></div><div class='line' id='LC81'>	<span class="nx">attributes</span> <span class="o">=</span> <span class="s2">&quot;\\[&quot;</span> <span class="o">+</span> <span class="nx">whitespace</span> <span class="o">+</span> <span class="s2">&quot;*(&quot;</span> <span class="o">+</span> <span class="nx">characterEncoding</span> <span class="o">+</span> <span class="s2">&quot;)&quot;</span> <span class="o">+</span> <span class="nx">whitespace</span> <span class="o">+</span></div><div class='line' id='LC82'>		<span class="s2">&quot;*(?:([*^$|!~]?=)&quot;</span> <span class="o">+</span> <span class="nx">whitespace</span> <span class="o">+</span> <span class="s2">&quot;*(?:([&#39;\&quot;])((?:\\\\.|[^\\\\])*?)\\3|(&quot;</span> <span class="o">+</span> <span class="nx">identifier</span> <span class="o">+</span> <span class="s2">&quot;)|)|)&quot;</span> <span class="o">+</span> <span class="nx">whitespace</span> <span class="o">+</span> <span class="s2">&quot;*\\]&quot;</span><span class="p">,</span></div><div class='line' id='LC83'><br/></div><div class='line' id='LC84'>	<span class="c1">// Prefer arguments quoted,</span></div><div class='line' id='LC85'>	<span class="c1">//   then not containing pseudos/brackets,</span></div><div class='line' id='LC86'>	<span class="c1">//   then attribute selectors/non-parenthetical expressions,</span></div><div class='line' id='LC87'>	<span class="c1">//   then anything else</span></div><div class='line' id='LC88'>	<span class="c1">// These preferences are here to reduce the number of selectors</span></div><div class='line' id='LC89'>	<span class="c1">//   needing tokenize in the PSEUDO preFilter</span></div><div class='line' id='LC90'>	<span class="nx">pseudos</span> <span class="o">=</span> <span class="s2">&quot;:(&quot;</span> <span class="o">+</span> <span class="nx">characterEncoding</span> <span class="o">+</span> <span class="s2">&quot;)(?:\\((([&#39;\&quot;])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|&quot;</span> <span class="o">+</span> <span class="nx">attributes</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">8</span> <span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;)*)|.*)\\)|)&quot;</span><span class="p">,</span></div><div class='line' id='LC91'><br/></div><div class='line' id='LC92'>	<span class="c1">// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter</span></div><div class='line' id='LC93'>	<span class="nx">rtrim</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span> <span class="s2">&quot;^&quot;</span> <span class="o">+</span> <span class="nx">whitespace</span> <span class="o">+</span> <span class="s2">&quot;+|((?:^|[^\\\\])(?:\\\\.)*)&quot;</span> <span class="o">+</span> <span class="nx">whitespace</span> <span class="o">+</span> <span class="s2">&quot;+$&quot;</span><span class="p">,</span> <span class="s2">&quot;g&quot;</span> <span class="p">),</span></div><div class='line' id='LC94'><br/></div><div class='line' id='LC95'>	<span class="nx">rcomma</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span> <span class="s2">&quot;^&quot;</span> <span class="o">+</span> <span class="nx">whitespace</span> <span class="o">+</span> <span class="s2">&quot;*,&quot;</span> <span class="o">+</span> <span class="nx">whitespace</span> <span class="o">+</span> <span class="s2">&quot;*&quot;</span> <span class="p">),</span></div><div class='line' id='LC96'>	<span class="nx">rcombinators</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span> <span class="s2">&quot;^&quot;</span> <span class="o">+</span> <span class="nx">whitespace</span> <span class="o">+</span> <span class="s2">&quot;*([&gt;+~]|&quot;</span> <span class="o">+</span> <span class="nx">whitespace</span> <span class="o">+</span> <span class="s2">&quot;)&quot;</span> <span class="o">+</span> <span class="nx">whitespace</span> <span class="o">+</span> <span class="s2">&quot;*&quot;</span> <span class="p">),</span></div><div class='line' id='LC97'><br/></div><div class='line' id='LC98'>	<span class="nx">rsibling</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span> <span class="nx">whitespace</span> <span class="o">+</span> <span class="s2">&quot;*[+~]&quot;</span> <span class="p">),</span></div><div class='line' id='LC99'>	<span class="nx">rattributeQuotes</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span> <span class="s2">&quot;=&quot;</span> <span class="o">+</span> <span class="nx">whitespace</span> <span class="o">+</span> <span class="s2">&quot;*([^\\]&#39;\&quot;]*)&quot;</span> <span class="o">+</span> <span class="nx">whitespace</span> <span class="o">+</span> <span class="s2">&quot;*\\]&quot;</span><span class="p">,</span> <span class="s2">&quot;g&quot;</span> <span class="p">),</span></div><div class='line' id='LC100'><br/></div><div class='line' id='LC101'>	<span class="nx">rpseudo</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span> <span class="nx">pseudos</span> <span class="p">),</span></div><div class='line' id='LC102'>	<span class="nx">ridentifier</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span> <span class="s2">&quot;^&quot;</span> <span class="o">+</span> <span class="nx">identifier</span> <span class="o">+</span> <span class="s2">&quot;$&quot;</span> <span class="p">),</span></div><div class='line' id='LC103'><br/></div><div class='line' id='LC104'>	<span class="nx">matchExpr</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC105'>		<span class="s2">&quot;ID&quot;</span><span class="o">:</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span> <span class="s2">&quot;^#(&quot;</span> <span class="o">+</span> <span class="nx">characterEncoding</span> <span class="o">+</span> <span class="s2">&quot;)&quot;</span> <span class="p">),</span></div><div class='line' id='LC106'>		<span class="s2">&quot;CLASS&quot;</span><span class="o">:</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span> <span class="s2">&quot;^\\.(&quot;</span> <span class="o">+</span> <span class="nx">characterEncoding</span> <span class="o">+</span> <span class="s2">&quot;)&quot;</span> <span class="p">),</span></div><div class='line' id='LC107'>		<span class="s2">&quot;TAG&quot;</span><span class="o">:</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span> <span class="s2">&quot;^(&quot;</span> <span class="o">+</span> <span class="nx">characterEncoding</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="s2">&quot;w&quot;</span><span class="p">,</span> <span class="s2">&quot;w*&quot;</span> <span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;)&quot;</span> <span class="p">),</span></div><div class='line' id='LC108'>		<span class="s2">&quot;ATTR&quot;</span><span class="o">:</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span> <span class="s2">&quot;^&quot;</span> <span class="o">+</span> <span class="nx">attributes</span> <span class="p">),</span></div><div class='line' id='LC109'>		<span class="s2">&quot;PSEUDO&quot;</span><span class="o">:</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span> <span class="s2">&quot;^&quot;</span> <span class="o">+</span> <span class="nx">pseudos</span> <span class="p">),</span></div><div class='line' id='LC110'>		<span class="s2">&quot;CHILD&quot;</span><span class="o">:</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span> <span class="s2">&quot;^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(&quot;</span> <span class="o">+</span> <span class="nx">whitespace</span> <span class="o">+</span></div><div class='line' id='LC111'>			<span class="s2">&quot;*(even|odd|(([+-]|)(\\d*)n|)&quot;</span> <span class="o">+</span> <span class="nx">whitespace</span> <span class="o">+</span> <span class="s2">&quot;*(?:([+-]|)&quot;</span> <span class="o">+</span> <span class="nx">whitespace</span> <span class="o">+</span></div><div class='line' id='LC112'>			<span class="s2">&quot;*(\\d+)|))&quot;</span> <span class="o">+</span> <span class="nx">whitespace</span> <span class="o">+</span> <span class="s2">&quot;*\\)|)&quot;</span><span class="p">,</span> <span class="s2">&quot;i&quot;</span> <span class="p">),</span></div><div class='line' id='LC113'>		<span class="s2">&quot;boolean&quot;</span><span class="o">:</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span> <span class="s2">&quot;^(?:&quot;</span> <span class="o">+</span> <span class="nx">booleans</span> <span class="o">+</span> <span class="s2">&quot;)$&quot;</span><span class="p">,</span> <span class="s2">&quot;i&quot;</span> <span class="p">),</span></div><div class='line' id='LC114'>		<span class="c1">// For use in libraries implementing .is()</span></div><div class='line' id='LC115'>		<span class="c1">// We use this for POS matching in `select`</span></div><div class='line' id='LC116'>		<span class="s2">&quot;needsContext&quot;</span><span class="o">:</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span> <span class="s2">&quot;^&quot;</span> <span class="o">+</span> <span class="nx">whitespace</span> <span class="o">+</span> <span class="s2">&quot;*[&gt;+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(&quot;</span> <span class="o">+</span></div><div class='line' id='LC117'>			<span class="nx">whitespace</span> <span class="o">+</span> <span class="s2">&quot;*((?:-\\d)?\\d*)&quot;</span> <span class="o">+</span> <span class="nx">whitespace</span> <span class="o">+</span> <span class="s2">&quot;*\\)|)(?=[^-]|$)&quot;</span><span class="p">,</span> <span class="s2">&quot;i&quot;</span> <span class="p">)</span></div><div class='line' id='LC118'>	<span class="p">},</span></div><div class='line' id='LC119'><br/></div><div class='line' id='LC120'>	<span class="nx">rnative</span> <span class="o">=</span> <span class="sr">/^[^{]+\{\s*\[native \w/</span><span class="p">,</span></div><div class='line' id='LC121'><br/></div><div class='line' id='LC122'>	<span class="c1">// Easily-parseable/retrievable ID or TAG or CLASS selectors</span></div><div class='line' id='LC123'>	<span class="nx">rquickExpr</span> <span class="o">=</span> <span class="sr">/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/</span><span class="p">,</span></div><div class='line' id='LC124'><br/></div><div class='line' id='LC125'>	<span class="nx">rinputs</span> <span class="o">=</span> <span class="sr">/^(?:input|select|textarea|button)$/i</span><span class="p">,</span></div><div class='line' id='LC126'>	<span class="nx">rheader</span> <span class="o">=</span> <span class="sr">/^h\d$/i</span><span class="p">,</span></div><div class='line' id='LC127'><br/></div><div class='line' id='LC128'>	<span class="nx">rescape</span> <span class="o">=</span> <span class="sr">/&#39;|\\/g</span><span class="p">,</span></div><div class='line' id='LC129'><br/></div><div class='line' id='LC130'>	<span class="c1">// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters</span></div><div class='line' id='LC131'>	<span class="nx">runescape</span> <span class="o">=</span> <span class="sr">/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g</span><span class="p">,</span></div><div class='line' id='LC132'>	<span class="nx">funescape</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">_</span><span class="p">,</span> <span class="nx">escaped</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC133'>		<span class="kd">var</span> <span class="nx">high</span> <span class="o">=</span> <span class="s2">&quot;0x&quot;</span> <span class="o">+</span> <span class="nx">escaped</span> <span class="o">-</span> <span class="mh">0x10000</span><span class="p">;</span></div><div class='line' id='LC134'>		<span class="c1">// NaN means non-codepoint</span></div><div class='line' id='LC135'>		<span class="k">return</span> <span class="nx">high</span> <span class="o">!==</span> <span class="nx">high</span> <span class="o">?</span></div><div class='line' id='LC136'>			<span class="nx">escaped</span> <span class="o">:</span></div><div class='line' id='LC137'>			<span class="c1">// BMP codepoint</span></div><div class='line' id='LC138'>			<span class="nx">high</span> <span class="o">&lt;</span> <span class="mi">0</span> <span class="o">?</span></div><div class='line' id='LC139'>				<span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span> <span class="nx">high</span> <span class="o">+</span> <span class="mh">0x10000</span> <span class="p">)</span> <span class="o">:</span></div><div class='line' id='LC140'>				<span class="c1">// Supplemental Plane codepoint (surrogate pair)</span></div><div class='line' id='LC141'>				<span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span> <span class="nx">high</span> <span class="o">&gt;&gt;</span> <span class="mi">10</span> <span class="o">|</span> <span class="mh">0xD800</span><span class="p">,</span> <span class="nx">high</span> <span class="o">&amp;</span> <span class="mh">0x3FF</span> <span class="o">|</span> <span class="mh">0xDC00</span> <span class="p">);</span></div><div class='line' id='LC142'>	<span class="p">};</span></div><div class='line' id='LC143'><br/></div><div class='line' id='LC144'><span class="c1">// Optimize for push.apply( _, NodeList )</span></div><div class='line' id='LC145'><span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC146'>	<span class="nx">push</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span></div><div class='line' id='LC147'>		<span class="p">(</span><span class="nx">arr</span> <span class="o">=</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span> <span class="nx">preferredDoc</span><span class="p">.</span><span class="nx">childNodes</span> <span class="p">)),</span></div><div class='line' id='LC148'>		<span class="nx">preferredDoc</span><span class="p">.</span><span class="nx">childNodes</span></div><div class='line' id='LC149'>	<span class="p">);</span></div><div class='line' id='LC150'>	<span class="c1">// Support: Android&lt;4.0</span></div><div class='line' id='LC151'>	<span class="c1">// Detect silently failing push.apply</span></div><div class='line' id='LC152'>	<span class="nx">arr</span><span class="p">[</span> <span class="nx">preferredDoc</span><span class="p">.</span><span class="nx">childNodes</span><span class="p">.</span><span class="nx">length</span> <span class="p">].</span><span class="nx">nodeType</span><span class="p">;</span></div><div class='line' id='LC153'><span class="p">}</span> <span class="k">catch</span> <span class="p">(</span> <span class="nx">e</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC154'>	<span class="nx">push</span> <span class="o">=</span> <span class="p">{</span> <span class="nx">apply</span><span class="o">:</span> <span class="nx">arr</span><span class="p">.</span><span class="nx">length</span> <span class="o">?</span></div><div class='line' id='LC155'><br/></div><div class='line' id='LC156'>		<span class="c1">// Leverage slice if possible</span></div><div class='line' id='LC157'>		<span class="kd">function</span><span class="p">(</span> <span class="nx">target</span><span class="p">,</span> <span class="nx">els</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC158'>			<span class="nx">push_native</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span> <span class="nx">target</span><span class="p">,</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">els</span><span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC159'>		<span class="p">}</span> <span class="o">:</span></div><div class='line' id='LC160'><br/></div><div class='line' id='LC161'>		<span class="c1">// Support: IE&lt;9</span></div><div class='line' id='LC162'>		<span class="c1">// Otherwise append directly</span></div><div class='line' id='LC163'>		<span class="kd">function</span><span class="p">(</span> <span class="nx">target</span><span class="p">,</span> <span class="nx">els</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC164'>			<span class="kd">var</span> <span class="nx">j</span> <span class="o">=</span> <span class="nx">target</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span></div><div class='line' id='LC165'>				<span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC166'>			<span class="c1">// Can&#39;t trust NodeList.length</span></div><div class='line' id='LC167'>			<span class="k">while</span> <span class="p">(</span> <span class="p">(</span><span class="nx">target</span><span class="p">[</span><span class="nx">j</span><span class="o">++</span><span class="p">]</span> <span class="o">=</span> <span class="nx">els</span><span class="p">[</span><span class="nx">i</span><span class="o">++</span><span class="p">])</span> <span class="p">)</span> <span class="p">{}</span></div><div class='line' id='LC168'>			<span class="nx">target</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="nx">j</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC169'>		<span class="p">}</span></div><div class='line' id='LC170'>	<span class="p">};</span></div><div class='line' id='LC171'><span class="p">}</span></div><div class='line' id='LC172'><br/></div><div class='line' id='LC173'><span class="cm">/**</span></div><div class='line' id='LC174'><span class="cm"> * For feature detection</span></div><div class='line' id='LC175'><span class="cm"> * @param {Function} fn The function to test for native support</span></div><div class='line' id='LC176'><span class="cm"> */</span></div><div class='line' id='LC177'><span class="kd">function</span> <span class="nx">isNative</span><span class="p">(</span> <span class="nx">fn</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC178'>	<span class="k">return</span> <span class="nx">rnative</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span> <span class="nx">fn</span> <span class="o">+</span> <span class="s2">&quot;&quot;</span> <span class="p">);</span></div><div class='line' id='LC179'><span class="p">}</span></div><div class='line' id='LC180'><br/></div><div class='line' id='LC181'><span class="cm">/**</span></div><div class='line' id='LC182'><span class="cm"> * Create key-value caches of limited size</span></div><div class='line' id='LC183'><span class="cm"> * @returns {Function(string, Object)} Returns the Object data after storing it on itself with</span></div><div class='line' id='LC184'><span class="cm"> *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)</span></div><div class='line' id='LC185'><span class="cm"> *	deleting the oldest entry</span></div><div class='line' id='LC186'><span class="cm"> */</span></div><div class='line' id='LC187'><span class="kd">function</span> <span class="nx">createCache</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC188'>	<span class="kd">var</span> <span class="nx">cache</span><span class="p">,</span></div><div class='line' id='LC189'>		<span class="nx">keys</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC190'><br/></div><div class='line' id='LC191'>	<span class="k">return</span> <span class="p">(</span><span class="nx">cache</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">key</span><span class="p">,</span> <span class="nx">value</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC192'>		<span class="c1">// Use (key + &quot; &quot;) to avoid collision with native prototype properties (see Issue #157)</span></div><div class='line' id='LC193'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">keys</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">key</span> <span class="o">+=</span> <span class="s2">&quot; &quot;</span> <span class="p">)</span> <span class="o">&gt;</span> <span class="nx">Expr</span><span class="p">.</span><span class="nx">cacheLength</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC194'>			<span class="c1">// Only keep the most recent entries</span></div><div class='line' id='LC195'>			<span class="k">delete</span> <span class="nx">cache</span><span class="p">[</span> <span class="nx">keys</span><span class="p">.</span><span class="nx">shift</span><span class="p">()</span> <span class="p">];</span></div><div class='line' id='LC196'>		<span class="p">}</span></div><div class='line' id='LC197'>		<span class="k">return</span> <span class="p">(</span><span class="nx">cache</span><span class="p">[</span> <span class="nx">key</span> <span class="p">]</span> <span class="o">=</span> <span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC198'>	<span class="p">});</span></div><div class='line' id='LC199'><span class="p">}</span></div><div class='line' id='LC200'><br/></div><div class='line' id='LC201'><span class="cm">/**</span></div><div class='line' id='LC202'><span class="cm"> * Mark a function for special use by Sizzle</span></div><div class='line' id='LC203'><span class="cm"> * @param {Function} fn The function to mark</span></div><div class='line' id='LC204'><span class="cm"> */</span></div><div class='line' id='LC205'><span class="kd">function</span> <span class="nx">markFunction</span><span class="p">(</span> <span class="nx">fn</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC206'>	<span class="nx">fn</span><span class="p">[</span> <span class="nx">expando</span> <span class="p">]</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC207'>	<span class="k">return</span> <span class="nx">fn</span><span class="p">;</span></div><div class='line' id='LC208'><span class="p">}</span></div><div class='line' id='LC209'><br/></div><div class='line' id='LC210'><span class="cm">/**</span></div><div class='line' id='LC211'><span class="cm"> * Support testing using an element</span></div><div class='line' id='LC212'><span class="cm"> * @param {Function} fn Passed the created div and expects a boolean result</span></div><div class='line' id='LC213'><span class="cm"> */</span></div><div class='line' id='LC214'><span class="kd">function</span> <span class="nx">assert</span><span class="p">(</span> <span class="nx">fn</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC215'>	<span class="kd">var</span> <span class="nx">div</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">);</span></div><div class='line' id='LC216'><br/></div><div class='line' id='LC217'>	<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC218'>		<span class="k">return</span> <span class="o">!!</span><span class="nx">fn</span><span class="p">(</span> <span class="nx">div</span> <span class="p">);</span></div><div class='line' id='LC219'>	<span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC220'>		<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC221'>	<span class="p">}</span> <span class="k">finally</span> <span class="p">{</span></div><div class='line' id='LC222'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">div</span><span class="p">.</span><span class="nx">parentNode</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC223'>			<span class="nx">div</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span> <span class="nx">div</span> <span class="p">);</span></div><div class='line' id='LC224'>		<span class="p">}</span></div><div class='line' id='LC225'><br/></div><div class='line' id='LC226'>		<span class="c1">// release memory in IE</span></div><div class='line' id='LC227'>		<span class="nx">div</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC228'>	<span class="p">}</span></div><div class='line' id='LC229'><span class="p">}</span></div><div class='line' id='LC230'><br/></div><div class='line' id='LC231'><span class="kd">function</span> <span class="nx">Sizzle</span><span class="p">(</span> <span class="nx">selector</span><span class="p">,</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">results</span><span class="p">,</span> <span class="nx">seed</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC232'>	<span class="kd">var</span> <span class="nx">match</span><span class="p">,</span> <span class="nx">elem</span><span class="p">,</span> <span class="nx">m</span><span class="p">,</span> <span class="nx">nodeType</span><span class="p">,</span></div><div class='line' id='LC233'>		<span class="c1">// QSA vars</span></div><div class='line' id='LC234'>		<span class="nx">i</span><span class="p">,</span> <span class="nx">groups</span><span class="p">,</span> <span class="nx">old</span><span class="p">,</span> <span class="nx">nid</span><span class="p">,</span> <span class="nx">newContext</span><span class="p">,</span> <span class="nx">newSelector</span><span class="p">;</span></div><div class='line' id='LC235'><br/></div><div class='line' id='LC236'>	<span class="k">if</span> <span class="p">(</span> <span class="p">(</span> <span class="nx">context</span> <span class="o">?</span> <span class="nx">context</span><span class="p">.</span><span class="nx">ownerDocument</span> <span class="o">||</span> <span class="nx">context</span> <span class="o">:</span> <span class="nx">preferredDoc</span> <span class="p">)</span> <span class="o">!==</span> <span class="nb">document</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC237'>		<span class="nx">setDocument</span><span class="p">(</span> <span class="nx">context</span> <span class="p">);</span></div><div class='line' id='LC238'>	<span class="p">}</span></div><div class='line' id='LC239'><br/></div><div class='line' id='LC240'>	<span class="nx">context</span> <span class="o">=</span> <span class="nx">context</span> <span class="o">||</span> <span class="nb">document</span><span class="p">;</span></div><div class='line' id='LC241'>	<span class="nx">results</span> <span class="o">=</span> <span class="nx">results</span> <span class="o">||</span> <span class="p">[];</span></div><div class='line' id='LC242'><br/></div><div class='line' id='LC243'>	<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">selector</span> <span class="o">||</span> <span class="k">typeof</span> <span class="nx">selector</span> <span class="o">!==</span> <span class="s2">&quot;string&quot;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC244'>		<span class="k">return</span> <span class="nx">results</span><span class="p">;</span></div><div class='line' id='LC245'>	<span class="p">}</span></div><div class='line' id='LC246'><br/></div><div class='line' id='LC247'>	<span class="k">if</span> <span class="p">(</span> <span class="p">(</span><span class="nx">nodeType</span> <span class="o">=</span> <span class="nx">context</span><span class="p">.</span><span class="nx">nodeType</span><span class="p">)</span> <span class="o">!==</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="nx">nodeType</span> <span class="o">!==</span> <span class="mi">9</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC248'>		<span class="k">return</span> <span class="p">[];</span></div><div class='line' id='LC249'>	<span class="p">}</span></div><div class='line' id='LC250'><br/></div><div class='line' id='LC251'>	<span class="k">if</span> <span class="p">(</span> <span class="nx">documentIsHTML</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">seed</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC252'><br/></div><div class='line' id='LC253'>		<span class="c1">// Shortcuts</span></div><div class='line' id='LC254'>		<span class="k">if</span> <span class="p">(</span> <span class="p">(</span><span class="nx">match</span> <span class="o">=</span> <span class="nx">rquickExpr</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span> <span class="nx">selector</span> <span class="p">))</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC255'>			<span class="c1">// Speed-up: Sizzle(&quot;#ID&quot;)</span></div><div class='line' id='LC256'>			<span class="k">if</span> <span class="p">(</span> <span class="p">(</span><span class="nx">m</span> <span class="o">=</span> <span class="nx">match</span><span class="p">[</span><span class="mi">1</span><span class="p">])</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC257'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">9</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC258'>					<span class="nx">elem</span> <span class="o">=</span> <span class="nx">context</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span> <span class="nx">m</span> <span class="p">);</span></div><div class='line' id='LC259'>					<span class="c1">// Check parentNode to catch when Blackberry 4.6 returns</span></div><div class='line' id='LC260'>					<span class="c1">// nodes that are no longer in the document #6963</span></div><div class='line' id='LC261'>					<span class="k">if</span> <span class="p">(</span> <span class="nx">elem</span> <span class="o">&amp;&amp;</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">parentNode</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC262'>						<span class="c1">// Handle the case where IE, Opera, and Webkit return items</span></div><div class='line' id='LC263'>						<span class="c1">// by name instead of ID</span></div><div class='line' id='LC264'>						<span class="k">if</span> <span class="p">(</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">id</span> <span class="o">===</span> <span class="nx">m</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC265'>							<span class="nx">results</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">);</span></div><div class='line' id='LC266'>							<span class="k">return</span> <span class="nx">results</span><span class="p">;</span></div><div class='line' id='LC267'>						<span class="p">}</span></div><div class='line' id='LC268'>					<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC269'>						<span class="k">return</span> <span class="nx">results</span><span class="p">;</span></div><div class='line' id='LC270'>					<span class="p">}</span></div><div class='line' id='LC271'>				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC272'>					<span class="c1">// Context is not a document</span></div><div class='line' id='LC273'>					<span class="k">if</span> <span class="p">(</span> <span class="nx">context</span><span class="p">.</span><span class="nx">ownerDocument</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">elem</span> <span class="o">=</span> <span class="nx">context</span><span class="p">.</span><span class="nx">ownerDocument</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span> <span class="nx">m</span> <span class="p">))</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC274'>						<span class="nx">contains</span><span class="p">(</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">elem</span> <span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">id</span> <span class="o">===</span> <span class="nx">m</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC275'>						<span class="nx">results</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">);</span></div><div class='line' id='LC276'>						<span class="k">return</span> <span class="nx">results</span><span class="p">;</span></div><div class='line' id='LC277'>					<span class="p">}</span></div><div class='line' id='LC278'>				<span class="p">}</span></div><div class='line' id='LC279'><br/></div><div class='line' id='LC280'>			<span class="c1">// Speed-up: Sizzle(&quot;TAG&quot;)</span></div><div class='line' id='LC281'>			<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="nx">match</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC282'>				<span class="nx">push</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span> <span class="nx">results</span><span class="p">,</span> <span class="nx">context</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span> <span class="nx">selector</span> <span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC283'>				<span class="k">return</span> <span class="nx">results</span><span class="p">;</span></div><div class='line' id='LC284'><br/></div><div class='line' id='LC285'>			<span class="c1">// Speed-up: Sizzle(&quot;.CLASS&quot;)</span></div><div class='line' id='LC286'>			<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="p">(</span><span class="nx">m</span> <span class="o">=</span> <span class="nx">match</span><span class="p">[</span><span class="mi">3</span><span class="p">])</span> <span class="o">&amp;&amp;</span> <span class="nx">support</span><span class="p">.</span><span class="nx">getElementsByClassName</span> <span class="o">&amp;&amp;</span> <span class="nx">context</span><span class="p">.</span><span class="nx">getElementsByClassName</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC287'>				<span class="nx">push</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span> <span class="nx">results</span><span class="p">,</span> <span class="nx">context</span><span class="p">.</span><span class="nx">getElementsByClassName</span><span class="p">(</span> <span class="nx">m</span> <span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC288'>				<span class="k">return</span> <span class="nx">results</span><span class="p">;</span></div><div class='line' id='LC289'>			<span class="p">}</span></div><div class='line' id='LC290'>		<span class="p">}</span></div><div class='line' id='LC291'><br/></div><div class='line' id='LC292'>		<span class="c1">// QSA path</span></div><div class='line' id='LC293'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">support</span><span class="p">.</span><span class="nx">qsa</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="o">!</span><span class="nx">rbuggyQSA</span> <span class="o">||</span> <span class="o">!</span><span class="nx">rbuggyQSA</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span> <span class="nx">selector</span> <span class="p">))</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC294'>			<span class="nx">nid</span> <span class="o">=</span> <span class="nx">old</span> <span class="o">=</span> <span class="nx">expando</span><span class="p">;</span></div><div class='line' id='LC295'>			<span class="nx">newContext</span> <span class="o">=</span> <span class="nx">context</span><span class="p">;</span></div><div class='line' id='LC296'>			<span class="nx">newSelector</span> <span class="o">=</span> <span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">9</span> <span class="o">&amp;&amp;</span> <span class="nx">selector</span><span class="p">;</span></div><div class='line' id='LC297'><br/></div><div class='line' id='LC298'>			<span class="c1">// qSA works strangely on Element-rooted queries</span></div><div class='line' id='LC299'>			<span class="c1">// We can work around this by specifying an extra ID on the root</span></div><div class='line' id='LC300'>			<span class="c1">// and working up from there (Thanks to Andrew Dupont for the technique)</span></div><div class='line' id='LC301'>			<span class="c1">// IE 8 doesn&#39;t work on object elements</span></div><div class='line' id='LC302'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="nx">context</span><span class="p">.</span><span class="nx">nodeName</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span> <span class="o">!==</span> <span class="s2">&quot;object&quot;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC303'>				<span class="nx">groups</span> <span class="o">=</span> <span class="nx">tokenize</span><span class="p">(</span> <span class="nx">selector</span> <span class="p">);</span></div><div class='line' id='LC304'><br/></div><div class='line' id='LC305'>				<span class="k">if</span> <span class="p">(</span> <span class="p">(</span><span class="nx">old</span> <span class="o">=</span> <span class="nx">context</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;id&quot;</span><span class="p">))</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC306'>					<span class="nx">nid</span> <span class="o">=</span> <span class="nx">old</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="nx">rescape</span><span class="p">,</span> <span class="s2">&quot;\\$&amp;&quot;</span> <span class="p">);</span></div><div class='line' id='LC307'>				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC308'>					<span class="nx">context</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span> <span class="s2">&quot;id&quot;</span><span class="p">,</span> <span class="nx">nid</span> <span class="p">);</span></div><div class='line' id='LC309'>				<span class="p">}</span></div><div class='line' id='LC310'>				<span class="nx">nid</span> <span class="o">=</span> <span class="s2">&quot;[id=&#39;&quot;</span> <span class="o">+</span> <span class="nx">nid</span> <span class="o">+</span> <span class="s2">&quot;&#39;] &quot;</span><span class="p">;</span></div><div class='line' id='LC311'><br/></div><div class='line' id='LC312'>				<span class="nx">i</span> <span class="o">=</span> <span class="nx">groups</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC313'>				<span class="k">while</span> <span class="p">(</span> <span class="nx">i</span><span class="o">--</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC314'>					<span class="nx">groups</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">nid</span> <span class="o">+</span> <span class="nx">toSelector</span><span class="p">(</span> <span class="nx">groups</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="p">);</span></div><div class='line' id='LC315'>				<span class="p">}</span></div><div class='line' id='LC316'>				<span class="nx">newContext</span> <span class="o">=</span> <span class="nx">rsibling</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span> <span class="nx">selector</span> <span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">context</span><span class="p">.</span><span class="nx">parentNode</span> <span class="o">||</span> <span class="nx">context</span><span class="p">;</span></div><div class='line' id='LC317'>				<span class="nx">newSelector</span> <span class="o">=</span> <span class="nx">groups</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;,&quot;</span><span class="p">);</span></div><div class='line' id='LC318'>			<span class="p">}</span></div><div class='line' id='LC319'><br/></div><div class='line' id='LC320'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">newSelector</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC321'>				<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC322'>					<span class="nx">push</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span> <span class="nx">results</span><span class="p">,</span></div><div class='line' id='LC323'>						<span class="nx">newContext</span><span class="p">.</span><span class="nx">querySelectorAll</span><span class="p">(</span> <span class="nx">newSelector</span> <span class="p">)</span></div><div class='line' id='LC324'>					<span class="p">);</span></div><div class='line' id='LC325'>					<span class="k">return</span> <span class="nx">results</span><span class="p">;</span></div><div class='line' id='LC326'>				<span class="p">}</span> <span class="k">catch</span><span class="p">(</span><span class="nx">qsaError</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC327'>				<span class="p">}</span> <span class="k">finally</span> <span class="p">{</span></div><div class='line' id='LC328'>					<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">old</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC329'>						<span class="nx">context</span><span class="p">.</span><span class="nx">removeAttribute</span><span class="p">(</span><span class="s2">&quot;id&quot;</span><span class="p">);</span></div><div class='line' id='LC330'>					<span class="p">}</span></div><div class='line' id='LC331'>				<span class="p">}</span></div><div class='line' id='LC332'>			<span class="p">}</span></div><div class='line' id='LC333'>		<span class="p">}</span></div><div class='line' id='LC334'>	<span class="p">}</span></div><div class='line' id='LC335'><br/></div><div class='line' id='LC336'>	<span class="c1">// All others</span></div><div class='line' id='LC337'>	<span class="k">return</span> <span class="nx">select</span><span class="p">(</span> <span class="nx">selector</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="nx">rtrim</span><span class="p">,</span> <span class="s2">&quot;$1&quot;</span> <span class="p">),</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">results</span><span class="p">,</span> <span class="nx">seed</span> <span class="p">);</span></div><div class='line' id='LC338'><span class="p">}</span></div><div class='line' id='LC339'><br/></div><div class='line' id='LC340'><span class="cm">/**</span></div><div class='line' id='LC341'><span class="cm"> * Detect xml</span></div><div class='line' id='LC342'><span class="cm"> * @param {Element|Object} elem An element or a document</span></div><div class='line' id='LC343'><span class="cm"> */</span></div><div class='line' id='LC344'><span class="nx">isXML</span> <span class="o">=</span> <span class="nx">Sizzle</span><span class="p">.</span><span class="nx">isXML</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC345'>	<span class="c1">// documentElement is verified for cases where it doesn&#39;t yet exist</span></div><div class='line' id='LC346'>	<span class="c1">// (such as loading iframes in IE - #4833)</span></div><div class='line' id='LC347'>	<span class="kd">var</span> <span class="nx">documentElement</span> <span class="o">=</span> <span class="nx">elem</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">elem</span><span class="p">.</span><span class="nx">ownerDocument</span> <span class="o">||</span> <span class="nx">elem</span><span class="p">).</span><span class="nx">documentElement</span><span class="p">;</span></div><div class='line' id='LC348'>	<span class="k">return</span> <span class="nx">documentElement</span> <span class="o">?</span> <span class="nx">documentElement</span><span class="p">.</span><span class="nx">nodeName</span> <span class="o">!==</span> <span class="s2">&quot;HTML&quot;</span> <span class="o">:</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC349'><span class="p">};</span></div><div class='line' id='LC350'><br/></div><div class='line' id='LC351'><span class="cm">/**</span></div><div class='line' id='LC352'><span class="cm"> * Sets document-related variables once based on the current document</span></div><div class='line' id='LC353'><span class="cm"> * @param {Element|Object} [doc] An element or document object to use to set the document</span></div><div class='line' id='LC354'><span class="cm"> * @returns {Object} Returns the current document</span></div><div class='line' id='LC355'><span class="cm"> */</span></div><div class='line' id='LC356'><span class="nx">setDocument</span> <span class="o">=</span> <span class="nx">Sizzle</span><span class="p">.</span><span class="nx">setDocument</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">node</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC357'>	<span class="kd">var</span> <span class="nx">doc</span> <span class="o">=</span> <span class="nx">node</span> <span class="o">?</span> <span class="nx">node</span><span class="p">.</span><span class="nx">ownerDocument</span> <span class="o">||</span> <span class="nx">node</span> <span class="o">:</span> <span class="nx">preferredDoc</span><span class="p">;</span></div><div class='line' id='LC358'><br/></div><div class='line' id='LC359'>	<span class="c1">// If no document and documentElement is available, return</span></div><div class='line' id='LC360'>	<span class="k">if</span> <span class="p">(</span> <span class="nx">doc</span> <span class="o">===</span> <span class="nb">document</span> <span class="o">||</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">!==</span> <span class="mi">9</span> <span class="o">||</span> <span class="o">!</span><span class="nx">doc</span><span class="p">.</span><span class="nx">documentElement</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC361'>		<span class="k">return</span> <span class="nb">document</span><span class="p">;</span></div><div class='line' id='LC362'>	<span class="p">}</span></div><div class='line' id='LC363'><br/></div><div class='line' id='LC364'>	<span class="c1">// Set our document</span></div><div class='line' id='LC365'>	<span class="nb">document</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">;</span></div><div class='line' id='LC366'>	<span class="nx">docElem</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">;</span></div><div class='line' id='LC367'><br/></div><div class='line' id='LC368'>	<span class="c1">// Support tests</span></div><div class='line' id='LC369'>	<span class="nx">documentIsHTML</span> <span class="o">=</span> <span class="o">!</span><span class="nx">isXML</span><span class="p">(</span> <span class="nx">doc</span> <span class="p">);</span></div><div class='line' id='LC370'><br/></div><div class='line' id='LC371'>	<span class="c1">// Check if getElementsByTagName(&quot;*&quot;) returns only elements</span></div><div class='line' id='LC372'>	<span class="nx">support</span><span class="p">.</span><span class="nx">getElementsByTagName</span> <span class="o">=</span> <span class="nx">assert</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">div</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC373'>		<span class="nx">div</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">createComment</span><span class="p">(</span><span class="s2">&quot;&quot;</span><span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC374'>		<span class="k">return</span> <span class="o">!</span><span class="nx">div</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s2">&quot;*&quot;</span><span class="p">).</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC375'>	<span class="p">});</span></div><div class='line' id='LC376'><br/></div><div class='line' id='LC377'>	<span class="c1">// Support: IE&lt;8</span></div><div class='line' id='LC378'>	<span class="c1">// Verify that getAttribute really returns attributes and not properties (excepting IE8 booleans)</span></div><div class='line' id='LC379'>	<span class="nx">support</span><span class="p">.</span><span class="nx">attributes</span> <span class="o">=</span> <span class="nx">assert</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">div</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC380'>		<span class="nx">div</span><span class="p">.</span><span class="nx">className</span> <span class="o">=</span> <span class="s2">&quot;i&quot;</span><span class="p">;</span></div><div class='line' id='LC381'>		<span class="k">return</span> <span class="o">!</span><span class="nx">div</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;className&quot;</span><span class="p">);</span></div><div class='line' id='LC382'>	<span class="p">});</span></div><div class='line' id='LC383'><br/></div><div class='line' id='LC384'>	<span class="c1">// Check if getElementsByClassName can be trusted</span></div><div class='line' id='LC385'>	<span class="nx">support</span><span class="p">.</span><span class="nx">getElementsByClassName</span> <span class="o">=</span> <span class="nx">assert</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">div</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC386'>		<span class="nx">div</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="s2">&quot;&lt;div class=&#39;a&#39;&gt;&lt;/div&gt;&lt;div class=&#39;a i&#39;&gt;&lt;/div&gt;&quot;</span><span class="p">;</span></div><div class='line' id='LC387'><br/></div><div class='line' id='LC388'>		<span class="c1">// Support: Safari&lt;4</span></div><div class='line' id='LC389'>		<span class="c1">// Catch class over-caching</span></div><div class='line' id='LC390'>		<span class="nx">div</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">.</span><span class="nx">className</span> <span class="o">=</span> <span class="s2">&quot;i&quot;</span><span class="p">;</span></div><div class='line' id='LC391'>		<span class="c1">// Support: Opera&lt;10</span></div><div class='line' id='LC392'>		<span class="c1">// Catch gEBCN failure to find non-leading classes</span></div><div class='line' id='LC393'>		<span class="k">return</span> <span class="nx">div</span><span class="p">.</span><span class="nx">getElementsByClassName</span><span class="p">(</span><span class="s2">&quot;i&quot;</span><span class="p">).</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC394'>	<span class="p">});</span></div><div class='line' id='LC395'><br/></div><div class='line' id='LC396'>	<span class="c1">// Support: Webkit&lt;537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)</span></div><div class='line' id='LC397'>	<span class="c1">// Detached nodes confoundingly follow *each other*</span></div><div class='line' id='LC398'>	<span class="nx">support</span><span class="p">.</span><span class="nx">sortDetached</span> <span class="o">=</span> <span class="nx">assert</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">div1</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC399'>		<span class="c1">// Should return 1, but returns 4 (following)</span></div><div class='line' id='LC400'>		<span class="k">return</span> <span class="nx">div1</span><span class="p">.</span><span class="nx">compareDocumentPosition</span><span class="p">(</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">)</span> <span class="p">)</span> <span class="o">&amp;</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC401'>	<span class="p">});</span></div><div class='line' id='LC402'><br/></div><div class='line' id='LC403'>	<span class="c1">// Support: IE&lt;10</span></div><div class='line' id='LC404'>	<span class="c1">// Check if getElementById returns elements by name</span></div><div class='line' id='LC405'>	<span class="c1">// Support: Windows 8 Native Apps</span></div><div class='line' id='LC406'>	<span class="c1">// Assigning innerHTML with &quot;name&quot; attributes throws uncatchable exceptions</span></div><div class='line' id='LC407'>	<span class="c1">// (http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx)</span></div><div class='line' id='LC408'>	<span class="c1">// and the broken getElementById methods don&#39;t pick up programatically-set names,</span></div><div class='line' id='LC409'>	<span class="c1">// so use a roundabout getElementsByName test</span></div><div class='line' id='LC410'>	<span class="nx">support</span><span class="p">.</span><span class="nx">getById</span> <span class="o">=</span> <span class="nx">assert</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">div</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC411'>		<span class="nx">docElem</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span> <span class="nx">div</span> <span class="p">).</span><span class="nx">id</span> <span class="o">=</span> <span class="nx">expando</span><span class="p">;</span></div><div class='line' id='LC412'>		<span class="k">return</span> <span class="o">!</span><span class="nx">doc</span><span class="p">.</span><span class="nx">getElementsByName</span> <span class="o">||</span> <span class="o">!</span><span class="nx">doc</span><span class="p">.</span><span class="nx">getElementsByName</span><span class="p">(</span> <span class="nx">expando</span> <span class="p">).</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC413'>	<span class="p">});</span></div><div class='line' id='LC414'><br/></div><div class='line' id='LC415'>	<span class="c1">// ID find and filter</span></div><div class='line' id='LC416'>	<span class="k">if</span> <span class="p">(</span> <span class="nx">support</span><span class="p">.</span><span class="nx">getById</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC417'>		<span class="nx">Expr</span><span class="p">.</span><span class="nx">find</span><span class="p">[</span><span class="s2">&quot;ID&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">id</span><span class="p">,</span> <span class="nx">context</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC418'>			<span class="k">if</span> <span class="p">(</span> <span class="k">typeof</span> <span class="nx">context</span><span class="p">.</span><span class="nx">getElementById</span> <span class="o">!==</span> <span class="nx">strundefined</span> <span class="o">&amp;&amp;</span> <span class="nx">documentIsHTML</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC419'>				<span class="kd">var</span> <span class="nx">m</span> <span class="o">=</span> <span class="nx">context</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span> <span class="nx">id</span> <span class="p">);</span></div><div class='line' id='LC420'>				<span class="c1">// Check parentNode to catch when Blackberry 4.6 returns</span></div><div class='line' id='LC421'>				<span class="c1">// nodes that are no longer in the document #6963</span></div><div class='line' id='LC422'>				<span class="k">return</span> <span class="nx">m</span> <span class="o">&amp;&amp;</span> <span class="nx">m</span><span class="p">.</span><span class="nx">parentNode</span> <span class="o">?</span> <span class="p">[</span><span class="nx">m</span><span class="p">]</span> <span class="o">:</span> <span class="p">[];</span></div><div class='line' id='LC423'>			<span class="p">}</span></div><div class='line' id='LC424'>		<span class="p">};</span></div><div class='line' id='LC425'>		<span class="nx">Expr</span><span class="p">.</span><span class="nx">filter</span><span class="p">[</span><span class="s2">&quot;ID&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">id</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC426'>			<span class="kd">var</span> <span class="nx">attrId</span> <span class="o">=</span> <span class="nx">id</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="nx">runescape</span><span class="p">,</span> <span class="nx">funescape</span> <span class="p">);</span></div><div class='line' id='LC427'>			<span class="k">return</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC428'>				<span class="k">return</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;id&quot;</span><span class="p">)</span> <span class="o">===</span> <span class="nx">attrId</span><span class="p">;</span></div><div class='line' id='LC429'>			<span class="p">};</span></div><div class='line' id='LC430'>		<span class="p">};</span></div><div class='line' id='LC431'>	<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC432'>		<span class="nx">Expr</span><span class="p">.</span><span class="nx">find</span><span class="p">[</span><span class="s2">&quot;ID&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">id</span><span class="p">,</span> <span class="nx">context</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC433'>			<span class="k">if</span> <span class="p">(</span> <span class="k">typeof</span> <span class="nx">context</span><span class="p">.</span><span class="nx">getElementById</span> <span class="o">!==</span> <span class="nx">strundefined</span> <span class="o">&amp;&amp;</span> <span class="nx">documentIsHTML</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC434'>				<span class="kd">var</span> <span class="nx">m</span> <span class="o">=</span> <span class="nx">context</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span> <span class="nx">id</span> <span class="p">);</span></div><div class='line' id='LC435'><br/></div><div class='line' id='LC436'>				<span class="k">return</span> <span class="nx">m</span> <span class="o">?</span></div><div class='line' id='LC437'>					<span class="nx">m</span><span class="p">.</span><span class="nx">id</span> <span class="o">===</span> <span class="nx">id</span> <span class="o">||</span> <span class="k">typeof</span> <span class="nx">m</span><span class="p">.</span><span class="nx">getAttributeNode</span> <span class="o">!==</span> <span class="nx">strundefined</span> <span class="o">&amp;&amp;</span> <span class="nx">m</span><span class="p">.</span><span class="nx">getAttributeNode</span><span class="p">(</span><span class="s2">&quot;id&quot;</span><span class="p">).</span><span class="nx">value</span> <span class="o">===</span> <span class="nx">id</span> <span class="o">?</span></div><div class='line' id='LC438'>						<span class="p">[</span><span class="nx">m</span><span class="p">]</span> <span class="o">:</span></div><div class='line' id='LC439'>						<span class="kc">undefined</span> <span class="o">:</span></div><div class='line' id='LC440'>					<span class="p">[];</span></div><div class='line' id='LC441'>			<span class="p">}</span></div><div class='line' id='LC442'>		<span class="p">};</span></div><div class='line' id='LC443'>		<span class="nx">Expr</span><span class="p">.</span><span class="nx">filter</span><span class="p">[</span><span class="s2">&quot;ID&quot;</span><span class="p">]</span> <span class="o">=</span>  <span class="kd">function</span><span class="p">(</span> <span class="nx">id</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC444'>			<span class="kd">var</span> <span class="nx">attrId</span> <span class="o">=</span> <span class="nx">id</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="nx">runescape</span><span class="p">,</span> <span class="nx">funescape</span> <span class="p">);</span></div><div class='line' id='LC445'>			<span class="k">return</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC446'>				<span class="kd">var</span> <span class="nx">node</span> <span class="o">=</span> <span class="k">typeof</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">getAttributeNode</span> <span class="o">!==</span> <span class="nx">strundefined</span> <span class="o">&amp;&amp;</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">getAttributeNode</span><span class="p">(</span><span class="s2">&quot;id&quot;</span><span class="p">);</span></div><div class='line' id='LC447'>				<span class="k">return</span> <span class="nx">node</span> <span class="o">&amp;&amp;</span> <span class="nx">node</span><span class="p">.</span><span class="nx">value</span> <span class="o">===</span> <span class="nx">attrId</span><span class="p">;</span></div><div class='line' id='LC448'>			<span class="p">};</span></div><div class='line' id='LC449'>		<span class="p">};</span></div><div class='line' id='LC450'>	<span class="p">}</span></div><div class='line' id='LC451'><br/></div><div class='line' id='LC452'>	<span class="c1">// Tag</span></div><div class='line' id='LC453'>	<span class="nx">Expr</span><span class="p">.</span><span class="nx">find</span><span class="p">[</span><span class="s2">&quot;TAG&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">support</span><span class="p">.</span><span class="nx">getElementsByTagName</span> <span class="o">?</span></div><div class='line' id='LC454'>		<span class="kd">function</span><span class="p">(</span> <span class="nx">tag</span><span class="p">,</span> <span class="nx">context</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC455'>			<span class="k">if</span> <span class="p">(</span> <span class="k">typeof</span> <span class="nx">context</span><span class="p">.</span><span class="nx">getElementsByTagName</span> <span class="o">!==</span> <span class="nx">strundefined</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC456'>				<span class="k">return</span> <span class="nx">context</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span> <span class="nx">tag</span> <span class="p">);</span></div><div class='line' id='LC457'>			<span class="p">}</span></div><div class='line' id='LC458'>		<span class="p">}</span> <span class="o">:</span></div><div class='line' id='LC459'>		<span class="kd">function</span><span class="p">(</span> <span class="nx">tag</span><span class="p">,</span> <span class="nx">context</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC460'>			<span class="kd">var</span> <span class="nx">elem</span><span class="p">,</span></div><div class='line' id='LC461'>				<span class="nx">tmp</span> <span class="o">=</span> <span class="p">[],</span></div><div class='line' id='LC462'>				<span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC463'>				<span class="nx">results</span> <span class="o">=</span> <span class="nx">context</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span> <span class="nx">tag</span> <span class="p">);</span></div><div class='line' id='LC464'><br/></div><div class='line' id='LC465'>			<span class="c1">// Filter out possible comments</span></div><div class='line' id='LC466'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">tag</span> <span class="o">===</span> <span class="s2">&quot;*&quot;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC467'>				<span class="k">while</span> <span class="p">(</span> <span class="p">(</span><span class="nx">elem</span> <span class="o">=</span> <span class="nx">results</span><span class="p">[</span><span class="nx">i</span><span class="o">++</span><span class="p">])</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC468'>					<span class="k">if</span> <span class="p">(</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">1</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC469'>						<span class="nx">tmp</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">);</span></div><div class='line' id='LC470'>					<span class="p">}</span></div><div class='line' id='LC471'>				<span class="p">}</span></div><div class='line' id='LC472'><br/></div><div class='line' id='LC473'>				<span class="k">return</span> <span class="nx">tmp</span><span class="p">;</span></div><div class='line' id='LC474'>			<span class="p">}</span></div><div class='line' id='LC475'>			<span class="k">return</span> <span class="nx">results</span><span class="p">;</span></div><div class='line' id='LC476'>		<span class="p">};</span></div><div class='line' id='LC477'><br/></div><div class='line' id='LC478'>	<span class="c1">// Class</span></div><div class='line' id='LC479'>	<span class="nx">Expr</span><span class="p">.</span><span class="nx">find</span><span class="p">[</span><span class="s2">&quot;CLASS&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">support</span><span class="p">.</span><span class="nx">getElementsByClassName</span> <span class="o">&amp;&amp;</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">className</span><span class="p">,</span> <span class="nx">context</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC480'>		<span class="k">if</span> <span class="p">(</span> <span class="k">typeof</span> <span class="nx">context</span><span class="p">.</span><span class="nx">getElementsByClassName</span> <span class="o">!==</span> <span class="nx">strundefined</span> <span class="o">&amp;&amp;</span> <span class="nx">documentIsHTML</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC481'>			<span class="k">return</span> <span class="nx">context</span><span class="p">.</span><span class="nx">getElementsByClassName</span><span class="p">(</span> <span class="nx">className</span> <span class="p">);</span></div><div class='line' id='LC482'>		<span class="p">}</span></div><div class='line' id='LC483'>	<span class="p">};</span></div><div class='line' id='LC484'><br/></div><div class='line' id='LC485'>	<span class="c1">// QSA and matchesSelector support</span></div><div class='line' id='LC486'><br/></div><div class='line' id='LC487'>	<span class="c1">// matchesSelector(:active) reports false when true (IE9/Opera 11.5)</span></div><div class='line' id='LC488'>	<span class="nx">rbuggyMatches</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC489'><br/></div><div class='line' id='LC490'>	<span class="c1">// qSa(:focus) reports false when true (Chrome 21)</span></div><div class='line' id='LC491'>	<span class="c1">// We allow this because of a bug in IE8/9 that throws an error</span></div><div class='line' id='LC492'>	<span class="c1">// whenever `document.activeElement` is accessed on an iframe</span></div><div class='line' id='LC493'>	<span class="c1">// So, we allow :focus to pass through QSA all the time to avoid the IE error</span></div><div class='line' id='LC494'>	<span class="c1">// See http://bugs.jquery.com/ticket/13378</span></div><div class='line' id='LC495'>	<span class="nx">rbuggyQSA</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC496'><br/></div><div class='line' id='LC497'>	<span class="k">if</span> <span class="p">(</span> <span class="p">(</span><span class="nx">support</span><span class="p">.</span><span class="nx">qsa</span> <span class="o">=</span> <span class="nx">isNative</span><span class="p">(</span><span class="nx">doc</span><span class="p">.</span><span class="nx">querySelectorAll</span><span class="p">))</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC498'>		<span class="c1">// Build QSA regex</span></div><div class='line' id='LC499'>		<span class="c1">// Regex strategy adopted from Diego Perini</span></div><div class='line' id='LC500'>		<span class="nx">assert</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">div</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC501'>			<span class="c1">// Select is set to empty string on purpose</span></div><div class='line' id='LC502'>			<span class="c1">// This is to test IE&#39;s treatment of not explicitly</span></div><div class='line' id='LC503'>			<span class="c1">// setting a boolean content attribute,</span></div><div class='line' id='LC504'>			<span class="c1">// since its presence should be enough</span></div><div class='line' id='LC505'>			<span class="c1">// http://bugs.jquery.com/ticket/12359</span></div><div class='line' id='LC506'>			<span class="nx">div</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="s2">&quot;&lt;select&gt;&lt;option selected=&#39;&#39;&gt;&lt;/option&gt;&lt;/select&gt;&quot;</span><span class="p">;</span></div><div class='line' id='LC507'><br/></div><div class='line' id='LC508'>			<span class="c1">// Support: IE8</span></div><div class='line' id='LC509'>			<span class="c1">// Boolean attributes and &quot;value&quot; are not treated correctly</span></div><div class='line' id='LC510'>			<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">div</span><span class="p">.</span><span class="nx">querySelectorAll</span><span class="p">(</span><span class="s2">&quot;[selected]&quot;</span><span class="p">).</span><span class="nx">length</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC511'>				<span class="nx">rbuggyQSA</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="s2">&quot;\\[&quot;</span> <span class="o">+</span> <span class="nx">whitespace</span> <span class="o">+</span> <span class="s2">&quot;*(?:value|&quot;</span> <span class="o">+</span> <span class="nx">booleans</span> <span class="o">+</span> <span class="s2">&quot;)&quot;</span> <span class="p">);</span></div><div class='line' id='LC512'>			<span class="p">}</span></div><div class='line' id='LC513'><br/></div><div class='line' id='LC514'>			<span class="c1">// Webkit/Opera - :checked should return selected option elements</span></div><div class='line' id='LC515'>			<span class="c1">// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked</span></div><div class='line' id='LC516'>			<span class="c1">// IE8 throws error here and will not see later tests</span></div><div class='line' id='LC517'>			<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">div</span><span class="p">.</span><span class="nx">querySelectorAll</span><span class="p">(</span><span class="s2">&quot;:checked&quot;</span><span class="p">).</span><span class="nx">length</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC518'>				<span class="nx">rbuggyQSA</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="s2">&quot;:checked&quot;</span><span class="p">);</span></div><div class='line' id='LC519'>			<span class="p">}</span></div><div class='line' id='LC520'>		<span class="p">});</span></div><div class='line' id='LC521'><br/></div><div class='line' id='LC522'>		<span class="nx">assert</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">div</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC523'><br/></div><div class='line' id='LC524'>			<span class="c1">// Support: Opera 10-12/IE8</span></div><div class='line' id='LC525'>			<span class="c1">// ^= $= *= and empty values</span></div><div class='line' id='LC526'>			<span class="c1">// Should not select anything</span></div><div class='line' id='LC527'>			<span class="c1">// Support: Windows 8 Native Apps</span></div><div class='line' id='LC528'>			<span class="c1">// The type attribute is restricted during .innerHTML assignment</span></div><div class='line' id='LC529'>			<span class="kd">var</span> <span class="nx">input</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;input&quot;</span><span class="p">);</span></div><div class='line' id='LC530'>			<span class="nx">input</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span> <span class="s2">&quot;type&quot;</span><span class="p">,</span> <span class="s2">&quot;hidden&quot;</span> <span class="p">);</span></div><div class='line' id='LC531'>			<span class="nx">div</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span> <span class="nx">input</span> <span class="p">).</span><span class="nx">setAttribute</span><span class="p">(</span> <span class="s2">&quot;t&quot;</span><span class="p">,</span> <span class="s2">&quot;&quot;</span> <span class="p">);</span></div><div class='line' id='LC532'><br/></div><div class='line' id='LC533'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">div</span><span class="p">.</span><span class="nx">querySelectorAll</span><span class="p">(</span><span class="s2">&quot;[t^=&#39;&#39;]&quot;</span><span class="p">).</span><span class="nx">length</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC534'>				<span class="nx">rbuggyQSA</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="s2">&quot;[*^$]=&quot;</span> <span class="o">+</span> <span class="nx">whitespace</span> <span class="o">+</span> <span class="s2">&quot;*(?:&#39;&#39;|\&quot;\&quot;)&quot;</span> <span class="p">);</span></div><div class='line' id='LC535'>			<span class="p">}</span></div><div class='line' id='LC536'><br/></div><div class='line' id='LC537'>			<span class="c1">// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)</span></div><div class='line' id='LC538'>			<span class="c1">// IE8 throws error here and will not see later tests</span></div><div class='line' id='LC539'>			<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">div</span><span class="p">.</span><span class="nx">querySelectorAll</span><span class="p">(</span><span class="s2">&quot;:enabled&quot;</span><span class="p">).</span><span class="nx">length</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC540'>				<span class="nx">rbuggyQSA</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="s2">&quot;:enabled&quot;</span><span class="p">,</span> <span class="s2">&quot;:disabled&quot;</span> <span class="p">);</span></div><div class='line' id='LC541'>			<span class="p">}</span></div><div class='line' id='LC542'><br/></div><div class='line' id='LC543'>			<span class="c1">// Opera 10-11 does not throw on post-comma invalid pseudos</span></div><div class='line' id='LC544'>			<span class="nx">div</span><span class="p">.</span><span class="nx">querySelectorAll</span><span class="p">(</span><span class="s2">&quot;*,:x&quot;</span><span class="p">);</span></div><div class='line' id='LC545'>			<span class="nx">rbuggyQSA</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="s2">&quot;,.*:&quot;</span><span class="p">);</span></div><div class='line' id='LC546'>		<span class="p">});</span></div><div class='line' id='LC547'>	<span class="p">}</span></div><div class='line' id='LC548'><br/></div><div class='line' id='LC549'>	<span class="k">if</span> <span class="p">(</span> <span class="p">(</span><span class="nx">support</span><span class="p">.</span><span class="nx">matchesSelector</span> <span class="o">=</span> <span class="nx">isNative</span><span class="p">(</span> <span class="p">(</span><span class="nx">matches</span> <span class="o">=</span> <span class="nx">docElem</span><span class="p">.</span><span class="nx">webkitMatchesSelector</span> <span class="o">||</span></div><div class='line' id='LC550'>		<span class="nx">docElem</span><span class="p">.</span><span class="nx">mozMatchesSelector</span> <span class="o">||</span></div><div class='line' id='LC551'>		<span class="nx">docElem</span><span class="p">.</span><span class="nx">oMatchesSelector</span> <span class="o">||</span></div><div class='line' id='LC552'>		<span class="nx">docElem</span><span class="p">.</span><span class="nx">msMatchesSelector</span><span class="p">)</span> <span class="p">))</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC553'><br/></div><div class='line' id='LC554'>		<span class="nx">assert</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">div</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC555'>			<span class="c1">// Check to see if it&#39;s possible to do matchesSelector</span></div><div class='line' id='LC556'>			<span class="c1">// on a disconnected node (IE 9)</span></div><div class='line' id='LC557'>			<span class="nx">support</span><span class="p">.</span><span class="nx">disconnectedMatch</span> <span class="o">=</span> <span class="nx">matches</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span> <span class="nx">div</span><span class="p">,</span> <span class="s2">&quot;div&quot;</span> <span class="p">);</span></div><div class='line' id='LC558'><br/></div><div class='line' id='LC559'>			<span class="c1">// This should fail with an exception</span></div><div class='line' id='LC560'>			<span class="c1">// Gecko does not error, returns false instead</span></div><div class='line' id='LC561'>			<span class="nx">matches</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span> <span class="nx">div</span><span class="p">,</span> <span class="s2">&quot;[s!=&#39;&#39;]:x&quot;</span> <span class="p">);</span></div><div class='line' id='LC562'>			<span class="nx">rbuggyMatches</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="s2">&quot;!=&quot;</span><span class="p">,</span> <span class="nx">pseudos</span> <span class="p">);</span></div><div class='line' id='LC563'>		<span class="p">});</span></div><div class='line' id='LC564'>	<span class="p">}</span></div><div class='line' id='LC565'><br/></div><div class='line' id='LC566'>	<span class="nx">rbuggyQSA</span> <span class="o">=</span> <span class="nx">rbuggyQSA</span><span class="p">.</span><span class="nx">length</span> <span class="o">&amp;&amp;</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span> <span class="nx">rbuggyQSA</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;|&quot;</span><span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC567'>	<span class="nx">rbuggyMatches</span> <span class="o">=</span> <span class="nx">rbuggyMatches</span><span class="p">.</span><span class="nx">length</span> <span class="o">&amp;&amp;</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span> <span class="nx">rbuggyMatches</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;|&quot;</span><span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC568'><br/></div><div class='line' id='LC569'>	<span class="c1">// Element contains another</span></div><div class='line' id='LC570'>	<span class="c1">// Purposefully does not implement inclusive descendent</span></div><div class='line' id='LC571'>	<span class="c1">// As in, an element does not contain itself</span></div><div class='line' id='LC572'>	<span class="nx">contains</span> <span class="o">=</span> <span class="nx">isNative</span><span class="p">(</span><span class="nx">docElem</span><span class="p">.</span><span class="nx">contains</span><span class="p">)</span> <span class="o">||</span> <span class="nx">docElem</span><span class="p">.</span><span class="nx">compareDocumentPosition</span> <span class="o">?</span></div><div class='line' id='LC573'>		<span class="kd">function</span><span class="p">(</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC574'>			<span class="kd">var</span> <span class="nx">adown</span> <span class="o">=</span> <span class="nx">a</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">9</span> <span class="o">?</span> <span class="nx">a</span><span class="p">.</span><span class="nx">documentElement</span> <span class="o">:</span> <span class="nx">a</span><span class="p">,</span></div><div class='line' id='LC575'>				<span class="nx">bup</span> <span class="o">=</span> <span class="nx">b</span> <span class="o">&amp;&amp;</span> <span class="nx">b</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">;</span></div><div class='line' id='LC576'>			<span class="k">return</span> <span class="nx">a</span> <span class="o">===</span> <span class="nx">bup</span> <span class="o">||</span> <span class="o">!!</span><span class="p">(</span> <span class="nx">bup</span> <span class="o">&amp;&amp;</span> <span class="nx">bup</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="p">(</span></div><div class='line' id='LC577'>				<span class="nx">adown</span><span class="p">.</span><span class="nx">contains</span> <span class="o">?</span></div><div class='line' id='LC578'>					<span class="nx">adown</span><span class="p">.</span><span class="nx">contains</span><span class="p">(</span> <span class="nx">bup</span> <span class="p">)</span> <span class="o">:</span></div><div class='line' id='LC579'>					<span class="nx">a</span><span class="p">.</span><span class="nx">compareDocumentPosition</span> <span class="o">&amp;&amp;</span> <span class="nx">a</span><span class="p">.</span><span class="nx">compareDocumentPosition</span><span class="p">(</span> <span class="nx">bup</span> <span class="p">)</span> <span class="o">&amp;</span> <span class="mi">16</span></div><div class='line' id='LC580'>			<span class="p">));</span></div><div class='line' id='LC581'>		<span class="p">}</span> <span class="o">:</span></div><div class='line' id='LC582'>		<span class="kd">function</span><span class="p">(</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC583'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">b</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC584'>				<span class="k">while</span> <span class="p">(</span> <span class="p">(</span><span class="nx">b</span> <span class="o">=</span> <span class="nx">b</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC585'>					<span class="k">if</span> <span class="p">(</span> <span class="nx">b</span> <span class="o">===</span> <span class="nx">a</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC586'>						<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC587'>					<span class="p">}</span></div><div class='line' id='LC588'>				<span class="p">}</span></div><div class='line' id='LC589'>			<span class="p">}</span></div><div class='line' id='LC590'>			<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC591'>		<span class="p">};</span></div><div class='line' id='LC592'><br/></div><div class='line' id='LC593'>	<span class="c1">// Document order sorting</span></div><div class='line' id='LC594'>	<span class="nx">sortOrder</span> <span class="o">=</span> <span class="nx">docElem</span><span class="p">.</span><span class="nx">compareDocumentPosition</span> <span class="o">?</span></div><div class='line' id='LC595'>	<span class="kd">function</span><span class="p">(</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC596'><br/></div><div class='line' id='LC597'>		<span class="c1">// Flag for duplicate removal</span></div><div class='line' id='LC598'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">a</span> <span class="o">===</span> <span class="nx">b</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC599'>			<span class="nx">hasDuplicate</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC600'>			<span class="k">return</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC601'>		<span class="p">}</span></div><div class='line' id='LC602'><br/></div><div class='line' id='LC603'>		<span class="kd">var</span> <span class="nx">compare</span> <span class="o">=</span> <span class="nx">b</span><span class="p">.</span><span class="nx">compareDocumentPosition</span> <span class="o">&amp;&amp;</span> <span class="nx">a</span><span class="p">.</span><span class="nx">compareDocumentPosition</span> <span class="o">&amp;&amp;</span> <span class="nx">a</span><span class="p">.</span><span class="nx">compareDocumentPosition</span><span class="p">(</span> <span class="nx">b</span> <span class="p">);</span></div><div class='line' id='LC604'><br/></div><div class='line' id='LC605'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">compare</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC606'>			<span class="c1">// Disconnected nodes</span></div><div class='line' id='LC607'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">compare</span> <span class="o">&amp;</span> <span class="mi">1</span> <span class="o">||</span></div><div class='line' id='LC608'>				<span class="p">(</span><span class="o">!</span><span class="nx">support</span><span class="p">.</span><span class="nx">sortDetached</span> <span class="o">&amp;&amp;</span> <span class="nx">b</span><span class="p">.</span><span class="nx">compareDocumentPosition</span><span class="p">(</span> <span class="nx">a</span> <span class="p">)</span> <span class="o">===</span> <span class="nx">compare</span><span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC609'><br/></div><div class='line' id='LC610'>				<span class="c1">// Choose the first element that is related to our preferred document</span></div><div class='line' id='LC611'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">a</span> <span class="o">===</span> <span class="nx">doc</span> <span class="o">||</span> <span class="nx">contains</span><span class="p">(</span><span class="nx">preferredDoc</span><span class="p">,</span> <span class="nx">a</span><span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC612'>					<span class="k">return</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC613'>				<span class="p">}</span></div><div class='line' id='LC614'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">b</span> <span class="o">===</span> <span class="nx">doc</span> <span class="o">||</span> <span class="nx">contains</span><span class="p">(</span><span class="nx">preferredDoc</span><span class="p">,</span> <span class="nx">b</span><span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC615'>					<span class="k">return</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC616'>				<span class="p">}</span></div><div class='line' id='LC617'><br/></div><div class='line' id='LC618'>				<span class="c1">// Maintain original order</span></div><div class='line' id='LC619'>				<span class="k">return</span> <span class="nx">sortInput</span> <span class="o">?</span></div><div class='line' id='LC620'>					<span class="p">(</span> <span class="nx">indexOf</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span> <span class="nx">sortInput</span><span class="p">,</span> <span class="nx">a</span> <span class="p">)</span> <span class="o">-</span> <span class="nx">indexOf</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span> <span class="nx">sortInput</span><span class="p">,</span> <span class="nx">b</span> <span class="p">)</span> <span class="p">)</span> <span class="o">:</span></div><div class='line' id='LC621'>					<span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC622'>			<span class="p">}</span></div><div class='line' id='LC623'><br/></div><div class='line' id='LC624'>			<span class="k">return</span> <span class="nx">compare</span> <span class="o">&amp;</span> <span class="mi">4</span> <span class="o">?</span> <span class="o">-</span><span class="mi">1</span> <span class="o">:</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC625'>		<span class="p">}</span></div><div class='line' id='LC626'><br/></div><div class='line' id='LC627'>		<span class="c1">// Not directly comparable, sort on existence of method</span></div><div class='line' id='LC628'>		<span class="k">return</span> <span class="nx">a</span><span class="p">.</span><span class="nx">compareDocumentPosition</span> <span class="o">?</span> <span class="o">-</span><span class="mi">1</span> <span class="o">:</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC629'>	<span class="p">}</span> <span class="o">:</span></div><div class='line' id='LC630'>	<span class="kd">function</span><span class="p">(</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC631'>		<span class="kd">var</span> <span class="nx">cur</span><span class="p">,</span></div><div class='line' id='LC632'>			<span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC633'>			<span class="nx">aup</span> <span class="o">=</span> <span class="nx">a</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">,</span></div><div class='line' id='LC634'>			<span class="nx">bup</span> <span class="o">=</span> <span class="nx">b</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">,</span></div><div class='line' id='LC635'>			<span class="nx">ap</span> <span class="o">=</span> <span class="p">[</span> <span class="nx">a</span> <span class="p">],</span></div><div class='line' id='LC636'>			<span class="nx">bp</span> <span class="o">=</span> <span class="p">[</span> <span class="nx">b</span> <span class="p">];</span></div><div class='line' id='LC637'><br/></div><div class='line' id='LC638'>		<span class="c1">// Exit early if the nodes are identical</span></div><div class='line' id='LC639'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">a</span> <span class="o">===</span> <span class="nx">b</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC640'>			<span class="nx">hasDuplicate</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC641'>			<span class="k">return</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC642'><br/></div><div class='line' id='LC643'>		<span class="c1">// Parentless nodes are either documents or disconnected</span></div><div class='line' id='LC644'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">aup</span> <span class="o">||</span> <span class="o">!</span><span class="nx">bup</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC645'>			<span class="k">return</span> <span class="nx">a</span> <span class="o">===</span> <span class="nx">doc</span> <span class="o">?</span> <span class="o">-</span><span class="mi">1</span> <span class="o">:</span></div><div class='line' id='LC646'>				<span class="nx">b</span> <span class="o">===</span> <span class="nx">doc</span> <span class="o">?</span> <span class="mi">1</span> <span class="o">:</span></div><div class='line' id='LC647'>				<span class="nx">aup</span> <span class="o">?</span> <span class="o">-</span><span class="mi">1</span> <span class="o">:</span></div><div class='line' id='LC648'>				<span class="nx">bup</span> <span class="o">?</span> <span class="mi">1</span> <span class="o">:</span></div><div class='line' id='LC649'>				<span class="nx">sortInput</span> <span class="o">?</span></div><div class='line' id='LC650'>				<span class="p">(</span> <span class="nx">indexOf</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span> <span class="nx">sortInput</span><span class="p">,</span> <span class="nx">a</span> <span class="p">)</span> <span class="o">-</span> <span class="nx">indexOf</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span> <span class="nx">sortInput</span><span class="p">,</span> <span class="nx">b</span> <span class="p">)</span> <span class="p">)</span> <span class="o">:</span></div><div class='line' id='LC651'>				<span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC652'><br/></div><div class='line' id='LC653'>		<span class="c1">// If the nodes are siblings, we can do a quick check</span></div><div class='line' id='LC654'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="nx">aup</span> <span class="o">===</span> <span class="nx">bup</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC655'>			<span class="k">return</span> <span class="nx">siblingCheck</span><span class="p">(</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span> <span class="p">);</span></div><div class='line' id='LC656'>		<span class="p">}</span></div><div class='line' id='LC657'><br/></div><div class='line' id='LC658'>		<span class="c1">// Otherwise we need full lists of their ancestors for comparison</span></div><div class='line' id='LC659'>		<span class="nx">cur</span> <span class="o">=</span> <span class="nx">a</span><span class="p">;</span></div><div class='line' id='LC660'>		<span class="k">while</span> <span class="p">(</span> <span class="p">(</span><span class="nx">cur</span> <span class="o">=</span> <span class="nx">cur</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC661'>			<span class="nx">ap</span><span class="p">.</span><span class="nx">unshift</span><span class="p">(</span> <span class="nx">cur</span> <span class="p">);</span></div><div class='line' id='LC662'>		<span class="p">}</span></div><div class='line' id='LC663'>		<span class="nx">cur</span> <span class="o">=</span> <span class="nx">b</span><span class="p">;</span></div><div class='line' id='LC664'>		<span class="k">while</span> <span class="p">(</span> <span class="p">(</span><span class="nx">cur</span> <span class="o">=</span> <span class="nx">cur</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC665'>			<span class="nx">bp</span><span class="p">.</span><span class="nx">unshift</span><span class="p">(</span> <span class="nx">cur</span> <span class="p">);</span></div><div class='line' id='LC666'>		<span class="p">}</span></div><div class='line' id='LC667'><br/></div><div class='line' id='LC668'>		<span class="c1">// Walk down the tree looking for a discrepancy</span></div><div class='line' id='LC669'>		<span class="k">while</span> <span class="p">(</span> <span class="nx">ap</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">===</span> <span class="nx">bp</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC670'>			<span class="nx">i</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC671'>		<span class="p">}</span></div><div class='line' id='LC672'><br/></div><div class='line' id='LC673'>		<span class="k">return</span> <span class="nx">i</span> <span class="o">?</span></div><div class='line' id='LC674'>			<span class="c1">// Do a sibling check if the nodes have a common ancestor</span></div><div class='line' id='LC675'>			<span class="nx">siblingCheck</span><span class="p">(</span> <span class="nx">ap</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span> <span class="nx">bp</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="p">)</span> <span class="o">:</span></div><div class='line' id='LC676'><br/></div><div class='line' id='LC677'>			<span class="c1">// Otherwise nodes in our document sort first</span></div><div class='line' id='LC678'>			<span class="nx">ap</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">===</span> <span class="nx">preferredDoc</span> <span class="o">?</span> <span class="o">-</span><span class="mi">1</span> <span class="o">:</span></div><div class='line' id='LC679'>			<span class="nx">bp</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">===</span> <span class="nx">preferredDoc</span> <span class="o">?</span> <span class="mi">1</span> <span class="o">:</span></div><div class='line' id='LC680'>			<span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC681'>	<span class="p">};</span></div><div class='line' id='LC682'><br/></div><div class='line' id='LC683'>	<span class="k">return</span> <span class="nb">document</span><span class="p">;</span></div><div class='line' id='LC684'><span class="p">};</span></div><div class='line' id='LC685'><br/></div><div class='line' id='LC686'><span class="nx">Sizzle</span><span class="p">.</span><span class="nx">matches</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">expr</span><span class="p">,</span> <span class="nx">elements</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC687'>	<span class="k">return</span> <span class="nx">Sizzle</span><span class="p">(</span> <span class="nx">expr</span><span class="p">,</span> <span class="kc">null</span><span class="p">,</span> <span class="kc">null</span><span class="p">,</span> <span class="nx">elements</span> <span class="p">);</span></div><div class='line' id='LC688'><span class="p">};</span></div><div class='line' id='LC689'><br/></div><div class='line' id='LC690'><span class="nx">Sizzle</span><span class="p">.</span><span class="nx">matchesSelector</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span><span class="p">,</span> <span class="nx">expr</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC691'>	<span class="c1">// Set document vars if needed</span></div><div class='line' id='LC692'>	<span class="k">if</span> <span class="p">(</span> <span class="p">(</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">ownerDocument</span> <span class="o">||</span> <span class="nx">elem</span> <span class="p">)</span> <span class="o">!==</span> <span class="nb">document</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC693'>		<span class="nx">setDocument</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">);</span></div><div class='line' id='LC694'>	<span class="p">}</span></div><div class='line' id='LC695'><br/></div><div class='line' id='LC696'>	<span class="c1">// Make sure that attribute selectors are quoted</span></div><div class='line' id='LC697'>	<span class="nx">expr</span> <span class="o">=</span> <span class="nx">expr</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="nx">rattributeQuotes</span><span class="p">,</span> <span class="s2">&quot;=&#39;$1&#39;]&quot;</span> <span class="p">);</span></div><div class='line' id='LC698'><br/></div><div class='line' id='LC699'>	<span class="c1">// rbuggyQSA always contains :focus, so no need for an existence check</span></div><div class='line' id='LC700'>	<span class="k">if</span> <span class="p">(</span> <span class="nx">support</span><span class="p">.</span><span class="nx">matchesSelector</span> <span class="o">&amp;&amp;</span> <span class="nx">documentIsHTML</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC701'>		<span class="p">(</span><span class="o">!</span><span class="nx">rbuggyMatches</span> <span class="o">||</span> <span class="o">!</span><span class="nx">rbuggyMatches</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">expr</span><span class="p">))</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC702'>		<span class="p">(</span><span class="o">!</span><span class="nx">rbuggyQSA</span>     <span class="o">||</span> <span class="o">!</span><span class="nx">rbuggyQSA</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">expr</span><span class="p">))</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC703'><br/></div><div class='line' id='LC704'>		<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC705'>			<span class="kd">var</span> <span class="nx">ret</span> <span class="o">=</span> <span class="nx">matches</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span> <span class="nx">elem</span><span class="p">,</span> <span class="nx">expr</span> <span class="p">);</span></div><div class='line' id='LC706'><br/></div><div class='line' id='LC707'>			<span class="c1">// IE 9&#39;s matchesSelector returns false on disconnected nodes</span></div><div class='line' id='LC708'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">ret</span> <span class="o">||</span> <span class="nx">support</span><span class="p">.</span><span class="nx">disconnectedMatch</span> <span class="o">||</span></div><div class='line' id='LC709'>					<span class="c1">// As well, disconnected nodes are said to be in a document</span></div><div class='line' id='LC710'>					<span class="c1">// fragment in IE 9</span></div><div class='line' id='LC711'>					<span class="nx">elem</span><span class="p">.</span><span class="nb">document</span> <span class="o">&amp;&amp;</span> <span class="nx">elem</span><span class="p">.</span><span class="nb">document</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">!==</span> <span class="mi">11</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC712'>				<span class="k">return</span> <span class="nx">ret</span><span class="p">;</span></div><div class='line' id='LC713'>			<span class="p">}</span></div><div class='line' id='LC714'>		<span class="p">}</span> <span class="k">catch</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{}</span></div><div class='line' id='LC715'>	<span class="p">}</span></div><div class='line' id='LC716'><br/></div><div class='line' id='LC717'>	<span class="k">return</span> <span class="nx">Sizzle</span><span class="p">(</span> <span class="nx">expr</span><span class="p">,</span> <span class="nb">document</span><span class="p">,</span> <span class="kc">null</span><span class="p">,</span> <span class="p">[</span><span class="nx">elem</span><span class="p">]</span> <span class="p">).</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC718'><span class="p">};</span></div><div class='line' id='LC719'><br/></div><div class='line' id='LC720'><span class="nx">Sizzle</span><span class="p">.</span><span class="nx">contains</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">elem</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC721'>	<span class="c1">// Set document vars if needed</span></div><div class='line' id='LC722'>	<span class="k">if</span> <span class="p">(</span> <span class="p">(</span> <span class="nx">context</span><span class="p">.</span><span class="nx">ownerDocument</span> <span class="o">||</span> <span class="nx">context</span> <span class="p">)</span> <span class="o">!==</span> <span class="nb">document</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC723'>		<span class="nx">setDocument</span><span class="p">(</span> <span class="nx">context</span> <span class="p">);</span></div><div class='line' id='LC724'>	<span class="p">}</span></div><div class='line' id='LC725'>	<span class="k">return</span> <span class="nx">contains</span><span class="p">(</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">elem</span> <span class="p">);</span></div><div class='line' id='LC726'><span class="p">};</span></div><div class='line' id='LC727'><br/></div><div class='line' id='LC728'><span class="nx">Sizzle</span><span class="p">.</span><span class="nx">attr</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span><span class="p">,</span> <span class="nx">name</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC729'>	<span class="c1">// Set document vars if needed</span></div><div class='line' id='LC730'>	<span class="k">if</span> <span class="p">(</span> <span class="p">(</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">ownerDocument</span> <span class="o">||</span> <span class="nx">elem</span> <span class="p">)</span> <span class="o">!==</span> <span class="nb">document</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC731'>		<span class="nx">setDocument</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">);</span></div><div class='line' id='LC732'>	<span class="p">}</span></div><div class='line' id='LC733'><br/></div><div class='line' id='LC734'>	<span class="kd">var</span> <span class="nx">fn</span> <span class="o">=</span> <span class="nx">Expr</span><span class="p">.</span><span class="nx">attrHandle</span><span class="p">[</span> <span class="nx">name</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span> <span class="p">],</span></div><div class='line' id='LC735'>		<span class="nx">val</span> <span class="o">=</span> <span class="nx">fn</span> <span class="o">&amp;&amp;</span> <span class="nx">fn</span><span class="p">(</span> <span class="nx">elem</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="o">!</span><span class="nx">documentIsHTML</span> <span class="p">);</span></div><div class='line' id='LC736'><br/></div><div class='line' id='LC737'>	<span class="k">return</span> <span class="nx">val</span> <span class="o">===</span> <span class="kc">undefined</span> <span class="o">?</span></div><div class='line' id='LC738'>		<span class="nx">support</span><span class="p">.</span><span class="nx">attributes</span> <span class="o">||</span> <span class="o">!</span><span class="nx">documentIsHTML</span> <span class="o">?</span></div><div class='line' id='LC739'>			<span class="nx">elem</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span> <span class="nx">name</span> <span class="p">)</span> <span class="o">:</span></div><div class='line' id='LC740'>			<span class="p">(</span><span class="nx">val</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">getAttributeNode</span><span class="p">(</span><span class="nx">name</span><span class="p">))</span> <span class="o">&amp;&amp;</span> <span class="nx">val</span><span class="p">.</span><span class="nx">specified</span> <span class="o">?</span></div><div class='line' id='LC741'>				<span class="nx">val</span><span class="p">.</span><span class="nx">value</span> <span class="o">:</span></div><div class='line' id='LC742'>				<span class="kc">null</span> <span class="o">:</span></div><div class='line' id='LC743'>		<span class="nx">val</span><span class="p">;</span></div><div class='line' id='LC744'><span class="p">};</span></div><div class='line' id='LC745'><br/></div><div class='line' id='LC746'><span class="nx">Sizzle</span><span class="p">.</span><span class="nx">error</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">msg</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC747'>	<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span> <span class="s2">&quot;Syntax error, unrecognized expression: &quot;</span> <span class="o">+</span> <span class="nx">msg</span> <span class="p">);</span></div><div class='line' id='LC748'><span class="p">};</span></div><div class='line' id='LC749'><br/></div><div class='line' id='LC750'><span class="c1">// Document sorting and removing duplicates</span></div><div class='line' id='LC751'><span class="nx">Sizzle</span><span class="p">.</span><span class="nx">uniqueSort</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">results</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC752'>	<span class="kd">var</span> <span class="nx">elem</span><span class="p">,</span></div><div class='line' id='LC753'>		<span class="nx">duplicates</span> <span class="o">=</span> <span class="p">[],</span></div><div class='line' id='LC754'>		<span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC755'>		<span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC756'><br/></div><div class='line' id='LC757'>	<span class="c1">// Unless we *know* we can detect duplicates, assume their presence</span></div><div class='line' id='LC758'>	<span class="nx">hasDuplicate</span> <span class="o">=</span> <span class="o">!</span><span class="nx">support</span><span class="p">.</span><span class="nx">detectDuplicates</span><span class="p">;</span></div><div class='line' id='LC759'>	<span class="nx">sortInput</span> <span class="o">=</span> <span class="o">!</span><span class="nx">support</span><span class="p">.</span><span class="nx">sortStable</span> <span class="o">&amp;&amp;</span> <span class="nx">results</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span> <span class="mi">0</span> <span class="p">);</span></div><div class='line' id='LC760'>	<span class="nx">results</span><span class="p">.</span><span class="nx">sort</span><span class="p">(</span> <span class="nx">sortOrder</span> <span class="p">);</span></div><div class='line' id='LC761'><br/></div><div class='line' id='LC762'>	<span class="k">if</span> <span class="p">(</span> <span class="nx">hasDuplicate</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC763'>		<span class="k">while</span> <span class="p">(</span> <span class="p">(</span><span class="nx">elem</span> <span class="o">=</span> <span class="nx">results</span><span class="p">[</span><span class="nx">i</span><span class="o">++</span><span class="p">])</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC764'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">elem</span> <span class="o">===</span> <span class="nx">results</span><span class="p">[</span> <span class="nx">i</span> <span class="p">]</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC765'>				<span class="nx">j</span> <span class="o">=</span> <span class="nx">duplicates</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">i</span> <span class="p">);</span></div><div class='line' id='LC766'>			<span class="p">}</span></div><div class='line' id='LC767'>		<span class="p">}</span></div><div class='line' id='LC768'>		<span class="k">while</span> <span class="p">(</span> <span class="nx">j</span><span class="o">--</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC769'>			<span class="nx">results</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span> <span class="nx">duplicates</span><span class="p">[</span> <span class="nx">j</span> <span class="p">],</span> <span class="mi">1</span> <span class="p">);</span></div><div class='line' id='LC770'>		<span class="p">}</span></div><div class='line' id='LC771'>	<span class="p">}</span></div><div class='line' id='LC772'><br/></div><div class='line' id='LC773'>	<span class="k">return</span> <span class="nx">results</span><span class="p">;</span></div><div class='line' id='LC774'><span class="p">};</span></div><div class='line' id='LC775'><br/></div><div class='line' id='LC776'><span class="cm">/**</span></div><div class='line' id='LC777'><span class="cm"> * Checks document order of two siblings</span></div><div class='line' id='LC778'><span class="cm"> * @param {Element} a</span></div><div class='line' id='LC779'><span class="cm"> * @param {Element} b</span></div><div class='line' id='LC780'><span class="cm"> * @returns Returns -1 if a precedes b, 1 if a follows b</span></div><div class='line' id='LC781'><span class="cm"> */</span></div><div class='line' id='LC782'><span class="kd">function</span> <span class="nx">siblingCheck</span><span class="p">(</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC783'>	<span class="kd">var</span> <span class="nx">cur</span> <span class="o">=</span> <span class="nx">b</span> <span class="o">&amp;&amp;</span> <span class="nx">a</span><span class="p">,</span></div><div class='line' id='LC784'>		<span class="nx">diff</span> <span class="o">=</span> <span class="nx">cur</span> <span class="o">&amp;&amp;</span> <span class="p">(</span> <span class="o">~</span><span class="nx">b</span><span class="p">.</span><span class="nx">sourceIndex</span> <span class="o">||</span> <span class="nx">MAX_NEGATIVE</span> <span class="p">)</span> <span class="o">-</span> <span class="p">(</span> <span class="o">~</span><span class="nx">a</span><span class="p">.</span><span class="nx">sourceIndex</span> <span class="o">||</span> <span class="nx">MAX_NEGATIVE</span> <span class="p">);</span></div><div class='line' id='LC785'><br/></div><div class='line' id='LC786'>	<span class="c1">// Use IE sourceIndex if available on both nodes</span></div><div class='line' id='LC787'>	<span class="k">if</span> <span class="p">(</span> <span class="nx">diff</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC788'>		<span class="k">return</span> <span class="nx">diff</span><span class="p">;</span></div><div class='line' id='LC789'>	<span class="p">}</span></div><div class='line' id='LC790'><br/></div><div class='line' id='LC791'>	<span class="c1">// Check if b follows a</span></div><div class='line' id='LC792'>	<span class="k">if</span> <span class="p">(</span> <span class="nx">cur</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC793'>		<span class="k">while</span> <span class="p">(</span> <span class="p">(</span><span class="nx">cur</span> <span class="o">=</span> <span class="nx">cur</span><span class="p">.</span><span class="nx">nextSibling</span><span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC794'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">cur</span> <span class="o">===</span> <span class="nx">b</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC795'>				<span class="k">return</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC796'>			<span class="p">}</span></div><div class='line' id='LC797'>		<span class="p">}</span></div><div class='line' id='LC798'>	<span class="p">}</span></div><div class='line' id='LC799'><br/></div><div class='line' id='LC800'>	<span class="k">return</span> <span class="nx">a</span> <span class="o">?</span> <span class="mi">1</span> <span class="o">:</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC801'><span class="p">}</span></div><div class='line' id='LC802'><br/></div><div class='line' id='LC803'><span class="c1">// Fetches boolean attributes by node</span></div><div class='line' id='LC804'><span class="kd">function</span> <span class="nx">boolHandler</span><span class="p">(</span> <span class="nx">elem</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">isXML</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC805'>	<span class="kd">var</span> <span class="nx">val</span><span class="p">;</span></div><div class='line' id='LC806'>	<span class="k">return</span> <span class="nx">isXML</span> <span class="o">?</span></div><div class='line' id='LC807'>		<span class="kc">undefined</span> <span class="o">:</span></div><div class='line' id='LC808'>		<span class="p">(</span><span class="nx">val</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">getAttributeNode</span><span class="p">(</span> <span class="nx">name</span> <span class="p">))</span> <span class="o">&amp;&amp;</span> <span class="nx">val</span><span class="p">.</span><span class="nx">specified</span> <span class="o">?</span></div><div class='line' id='LC809'>			<span class="nx">val</span><span class="p">.</span><span class="nx">value</span> <span class="o">:</span></div><div class='line' id='LC810'>			<span class="nx">elem</span><span class="p">[</span> <span class="nx">name</span> <span class="p">]</span> <span class="o">===</span> <span class="kc">true</span> <span class="o">?</span> <span class="nx">name</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span> <span class="o">:</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC811'><span class="p">}</span></div><div class='line' id='LC812'><br/></div><div class='line' id='LC813'><span class="c1">// Fetches attributes without interpolation</span></div><div class='line' id='LC814'><span class="c1">// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx</span></div><div class='line' id='LC815'><span class="kd">function</span> <span class="nx">interpolationHandler</span><span class="p">(</span> <span class="nx">elem</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">isXML</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC816'>	<span class="kd">var</span> <span class="nx">val</span><span class="p">;</span></div><div class='line' id='LC817'>	<span class="k">return</span> <span class="nx">isXML</span> <span class="o">?</span></div><div class='line' id='LC818'>		<span class="kc">undefined</span> <span class="o">:</span></div><div class='line' id='LC819'>		<span class="p">(</span><span class="nx">val</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">name</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span> <span class="o">===</span> <span class="s2">&quot;type&quot;</span> <span class="o">?</span> <span class="mi">1</span> <span class="o">:</span> <span class="mi">2</span> <span class="p">));</span></div><div class='line' id='LC820'><span class="p">}</span></div><div class='line' id='LC821'><br/></div><div class='line' id='LC822'><span class="c1">// Returns a function to use in pseudos for input types</span></div><div class='line' id='LC823'><span class="kd">function</span> <span class="nx">createInputPseudo</span><span class="p">(</span> <span class="nx">type</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC824'>	<span class="k">return</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC825'>		<span class="kd">var</span> <span class="nx">name</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">nodeName</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">();</span></div><div class='line' id='LC826'>		<span class="k">return</span> <span class="nx">name</span> <span class="o">===</span> <span class="s2">&quot;input&quot;</span> <span class="o">&amp;&amp;</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">type</span> <span class="o">===</span> <span class="nx">type</span><span class="p">;</span></div><div class='line' id='LC827'>	<span class="p">};</span></div><div class='line' id='LC828'><span class="p">}</span></div><div class='line' id='LC829'><br/></div><div class='line' id='LC830'><span class="c1">// Returns a function to use in pseudos for buttons</span></div><div class='line' id='LC831'><span class="kd">function</span> <span class="nx">createButtonPseudo</span><span class="p">(</span> <span class="nx">type</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC832'>	<span class="k">return</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC833'>		<span class="kd">var</span> <span class="nx">name</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">nodeName</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">();</span></div><div class='line' id='LC834'>		<span class="k">return</span> <span class="p">(</span><span class="nx">name</span> <span class="o">===</span> <span class="s2">&quot;input&quot;</span> <span class="o">||</span> <span class="nx">name</span> <span class="o">===</span> <span class="s2">&quot;button&quot;</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">type</span> <span class="o">===</span> <span class="nx">type</span><span class="p">;</span></div><div class='line' id='LC835'>	<span class="p">};</span></div><div class='line' id='LC836'><span class="p">}</span></div><div class='line' id='LC837'><br/></div><div class='line' id='LC838'><span class="c1">// Returns a function to use in pseudos for positionals</span></div><div class='line' id='LC839'><span class="kd">function</span> <span class="nx">createPositionalPseudo</span><span class="p">(</span> <span class="nx">fn</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC840'>	<span class="k">return</span> <span class="nx">markFunction</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">argument</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC841'>		<span class="nx">argument</span> <span class="o">=</span> <span class="o">+</span><span class="nx">argument</span><span class="p">;</span></div><div class='line' id='LC842'>		<span class="k">return</span> <span class="nx">markFunction</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">seed</span><span class="p">,</span> <span class="nx">matches</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC843'>			<span class="kd">var</span> <span class="nx">j</span><span class="p">,</span></div><div class='line' id='LC844'>				<span class="nx">matchIndexes</span> <span class="o">=</span> <span class="nx">fn</span><span class="p">(</span> <span class="p">[],</span> <span class="nx">seed</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span> <span class="nx">argument</span> <span class="p">),</span></div><div class='line' id='LC845'>				<span class="nx">i</span> <span class="o">=</span> <span class="nx">matchIndexes</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC846'><br/></div><div class='line' id='LC847'>			<span class="c1">// Match elements found at the specified indexes</span></div><div class='line' id='LC848'>			<span class="k">while</span> <span class="p">(</span> <span class="nx">i</span><span class="o">--</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC849'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">seed</span><span class="p">[</span> <span class="p">(</span><span class="nx">j</span> <span class="o">=</span> <span class="nx">matchIndexes</span><span class="p">[</span><span class="nx">i</span><span class="p">])</span> <span class="p">]</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC850'>					<span class="nx">seed</span><span class="p">[</span><span class="nx">j</span><span class="p">]</span> <span class="o">=</span> <span class="o">!</span><span class="p">(</span><span class="nx">matches</span><span class="p">[</span><span class="nx">j</span><span class="p">]</span> <span class="o">=</span> <span class="nx">seed</span><span class="p">[</span><span class="nx">j</span><span class="p">]);</span></div><div class='line' id='LC851'>				<span class="p">}</span></div><div class='line' id='LC852'>			<span class="p">}</span></div><div class='line' id='LC853'>		<span class="p">});</span></div><div class='line' id='LC854'>	<span class="p">});</span></div><div class='line' id='LC855'><span class="p">}</span></div><div class='line' id='LC856'><br/></div><div class='line' id='LC857'><span class="cm">/**</span></div><div class='line' id='LC858'><span class="cm"> * Utility function for retrieving the text value of an array of DOM nodes</span></div><div class='line' id='LC859'><span class="cm"> * @param {Array|Element} elem</span></div><div class='line' id='LC860'><span class="cm"> */</span></div><div class='line' id='LC861'><span class="nx">getText</span> <span class="o">=</span> <span class="nx">Sizzle</span><span class="p">.</span><span class="nx">getText</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC862'>	<span class="kd">var</span> <span class="nx">node</span><span class="p">,</span></div><div class='line' id='LC863'>		<span class="nx">ret</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span><span class="p">,</span></div><div class='line' id='LC864'>		<span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC865'>		<span class="nx">nodeType</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">nodeType</span><span class="p">;</span></div><div class='line' id='LC866'><br/></div><div class='line' id='LC867'>	<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">nodeType</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC868'>		<span class="c1">// If no nodeType, this is expected to be an array</span></div><div class='line' id='LC869'>		<span class="k">for</span> <span class="p">(</span> <span class="p">;</span> <span class="p">(</span><span class="nx">node</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span> <span class="nx">i</span><span class="o">++</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC870'>			<span class="c1">// Do not traverse comment nodes</span></div><div class='line' id='LC871'>			<span class="nx">ret</span> <span class="o">+=</span> <span class="nx">getText</span><span class="p">(</span> <span class="nx">node</span> <span class="p">);</span></div><div class='line' id='LC872'>		<span class="p">}</span></div><div class='line' id='LC873'>	<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">1</span> <span class="o">||</span> <span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">9</span> <span class="o">||</span> <span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">11</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC874'>		<span class="c1">// Use textContent for elements</span></div><div class='line' id='LC875'>		<span class="c1">// innerText usage removed for consistency of new lines (see #11153)</span></div><div class='line' id='LC876'>		<span class="k">if</span> <span class="p">(</span> <span class="k">typeof</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">textContent</span> <span class="o">===</span> <span class="s2">&quot;string&quot;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC877'>			<span class="k">return</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">textContent</span><span class="p">;</span></div><div class='line' id='LC878'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC879'>			<span class="c1">// Traverse its children</span></div><div class='line' id='LC880'>			<span class="k">for</span> <span class="p">(</span> <span class="nx">elem</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">;</span> <span class="nx">elem</span><span class="p">;</span> <span class="nx">elem</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">nextSibling</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC881'>				<span class="nx">ret</span> <span class="o">+=</span> <span class="nx">getText</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">);</span></div><div class='line' id='LC882'>			<span class="p">}</span></div><div class='line' id='LC883'>		<span class="p">}</span></div><div class='line' id='LC884'>	<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">3</span> <span class="o">||</span> <span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">4</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC885'>		<span class="k">return</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">nodeValue</span><span class="p">;</span></div><div class='line' id='LC886'>	<span class="p">}</span></div><div class='line' id='LC887'>	<span class="c1">// Do not include comment or processing instruction nodes</span></div><div class='line' id='LC888'><br/></div><div class='line' id='LC889'>	<span class="k">return</span> <span class="nx">ret</span><span class="p">;</span></div><div class='line' id='LC890'><span class="p">};</span></div><div class='line' id='LC891'><br/></div><div class='line' id='LC892'><span class="nx">Expr</span> <span class="o">=</span> <span class="nx">Sizzle</span><span class="p">.</span><span class="nx">selectors</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC893'><br/></div><div class='line' id='LC894'>	<span class="c1">// Can be adjusted by the user</span></div><div class='line' id='LC895'>	<span class="nx">cacheLength</span><span class="o">:</span> <span class="mi">50</span><span class="p">,</span></div><div class='line' id='LC896'><br/></div><div class='line' id='LC897'>	<span class="nx">createPseudo</span><span class="o">:</span> <span class="nx">markFunction</span><span class="p">,</span></div><div class='line' id='LC898'><br/></div><div class='line' id='LC899'>	<span class="nx">match</span><span class="o">:</span> <span class="nx">matchExpr</span><span class="p">,</span></div><div class='line' id='LC900'><br/></div><div class='line' id='LC901'>	<span class="nx">attrHandle</span><span class="o">:</span> <span class="p">{},</span></div><div class='line' id='LC902'><br/></div><div class='line' id='LC903'>	<span class="nx">find</span><span class="o">:</span> <span class="p">{},</span></div><div class='line' id='LC904'><br/></div><div class='line' id='LC905'>	<span class="nx">relative</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC906'>		<span class="s2">&quot;&gt;&quot;</span><span class="o">:</span> <span class="p">{</span> <span class="nx">dir</span><span class="o">:</span> <span class="s2">&quot;parentNode&quot;</span><span class="p">,</span> <span class="nx">first</span><span class="o">:</span> <span class="kc">true</span> <span class="p">},</span></div><div class='line' id='LC907'>		<span class="s2">&quot; &quot;</span><span class="o">:</span> <span class="p">{</span> <span class="nx">dir</span><span class="o">:</span> <span class="s2">&quot;parentNode&quot;</span> <span class="p">},</span></div><div class='line' id='LC908'>		<span class="s2">&quot;+&quot;</span><span class="o">:</span> <span class="p">{</span> <span class="nx">dir</span><span class="o">:</span> <span class="s2">&quot;previousSibling&quot;</span><span class="p">,</span> <span class="nx">first</span><span class="o">:</span> <span class="kc">true</span> <span class="p">},</span></div><div class='line' id='LC909'>		<span class="s2">&quot;~&quot;</span><span class="o">:</span> <span class="p">{</span> <span class="nx">dir</span><span class="o">:</span> <span class="s2">&quot;previousSibling&quot;</span> <span class="p">}</span></div><div class='line' id='LC910'>	<span class="p">},</span></div><div class='line' id='LC911'><br/></div><div class='line' id='LC912'>	<span class="nx">preFilter</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC913'>		<span class="s2">&quot;ATTR&quot;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">match</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC914'>			<span class="nx">match</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="nx">match</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nx">replace</span><span class="p">(</span> <span class="nx">runescape</span><span class="p">,</span> <span class="nx">funescape</span> <span class="p">);</span></div><div class='line' id='LC915'><br/></div><div class='line' id='LC916'>			<span class="c1">// Move the given value to match[3] whether quoted or unquoted</span></div><div class='line' id='LC917'>			<span class="nx">match</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span> <span class="o">=</span> <span class="p">(</span> <span class="nx">match</span><span class="p">[</span><span class="mi">4</span><span class="p">]</span> <span class="o">||</span> <span class="nx">match</span><span class="p">[</span><span class="mi">5</span><span class="p">]</span> <span class="o">||</span> <span class="s2">&quot;&quot;</span> <span class="p">).</span><span class="nx">replace</span><span class="p">(</span> <span class="nx">runescape</span><span class="p">,</span> <span class="nx">funescape</span> <span class="p">);</span></div><div class='line' id='LC918'><br/></div><div class='line' id='LC919'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">match</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span> <span class="o">===</span> <span class="s2">&quot;~=&quot;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC920'>				<span class="nx">match</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span> <span class="o">=</span> <span class="s2">&quot; &quot;</span> <span class="o">+</span> <span class="nx">match</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span> <span class="o">+</span> <span class="s2">&quot; &quot;</span><span class="p">;</span></div><div class='line' id='LC921'>			<span class="p">}</span></div><div class='line' id='LC922'><br/></div><div class='line' id='LC923'>			<span class="k">return</span> <span class="nx">match</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">4</span> <span class="p">);</span></div><div class='line' id='LC924'>		<span class="p">},</span></div><div class='line' id='LC925'><br/></div><div class='line' id='LC926'>		<span class="s2">&quot;CHILD&quot;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">match</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC927'>			<span class="cm">/* matches from matchExpr[&quot;CHILD&quot;]</span></div><div class='line' id='LC928'><span class="cm">				1 type (only|nth|...)</span></div><div class='line' id='LC929'><span class="cm">				2 what (child|of-type)</span></div><div class='line' id='LC930'><span class="cm">				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)</span></div><div class='line' id='LC931'><span class="cm">				4 xn-component of xn+y argument ([+-]?\d*n|)</span></div><div class='line' id='LC932'><span class="cm">				5 sign of xn-component</span></div><div class='line' id='LC933'><span class="cm">				6 x of xn-component</span></div><div class='line' id='LC934'><span class="cm">				7 sign of y-component</span></div><div class='line' id='LC935'><span class="cm">				8 y of y-component</span></div><div class='line' id='LC936'><span class="cm">			*/</span></div><div class='line' id='LC937'>			<span class="nx">match</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="nx">match</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nx">toLowerCase</span><span class="p">();</span></div><div class='line' id='LC938'><br/></div><div class='line' id='LC939'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">match</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nx">slice</span><span class="p">(</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">3</span> <span class="p">)</span> <span class="o">===</span> <span class="s2">&quot;nth&quot;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC940'>				<span class="c1">// nth-* requires argument</span></div><div class='line' id='LC941'>				<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">match</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC942'>					<span class="nx">Sizzle</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span> <span class="nx">match</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="p">);</span></div><div class='line' id='LC943'>				<span class="p">}</span></div><div class='line' id='LC944'><br/></div><div class='line' id='LC945'>				<span class="c1">// numeric x and y parameters for Expr.filter.CHILD</span></div><div class='line' id='LC946'>				<span class="c1">// remember that false/true cast respectively to 0/1</span></div><div class='line' id='LC947'>				<span class="nx">match</span><span class="p">[</span><span class="mi">4</span><span class="p">]</span> <span class="o">=</span> <span class="o">+</span><span class="p">(</span> <span class="nx">match</span><span class="p">[</span><span class="mi">4</span><span class="p">]</span> <span class="o">?</span> <span class="nx">match</span><span class="p">[</span><span class="mi">5</span><span class="p">]</span> <span class="o">+</span> <span class="p">(</span><span class="nx">match</span><span class="p">[</span><span class="mi">6</span><span class="p">]</span> <span class="o">||</span> <span class="mi">1</span><span class="p">)</span> <span class="o">:</span> <span class="mi">2</span> <span class="o">*</span> <span class="p">(</span> <span class="nx">match</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span> <span class="o">===</span> <span class="s2">&quot;even&quot;</span> <span class="o">||</span> <span class="nx">match</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span> <span class="o">===</span> <span class="s2">&quot;odd&quot;</span> <span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC948'>				<span class="nx">match</span><span class="p">[</span><span class="mi">5</span><span class="p">]</span> <span class="o">=</span> <span class="o">+</span><span class="p">(</span> <span class="p">(</span> <span class="nx">match</span><span class="p">[</span><span class="mi">7</span><span class="p">]</span> <span class="o">+</span> <span class="nx">match</span><span class="p">[</span><span class="mi">8</span><span class="p">]</span> <span class="p">)</span> <span class="o">||</span> <span class="nx">match</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span> <span class="o">===</span> <span class="s2">&quot;odd&quot;</span> <span class="p">);</span></div><div class='line' id='LC949'><br/></div><div class='line' id='LC950'>			<span class="c1">// other types prohibit arguments</span></div><div class='line' id='LC951'>			<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="nx">match</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC952'>				<span class="nx">Sizzle</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span> <span class="nx">match</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="p">);</span></div><div class='line' id='LC953'>			<span class="p">}</span></div><div class='line' id='LC954'><br/></div><div class='line' id='LC955'>			<span class="k">return</span> <span class="nx">match</span><span class="p">;</span></div><div class='line' id='LC956'>		<span class="p">},</span></div><div class='line' id='LC957'><br/></div><div class='line' id='LC958'>		<span class="s2">&quot;PSEUDO&quot;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">match</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC959'>			<span class="kd">var</span> <span class="nx">excess</span><span class="p">,</span></div><div class='line' id='LC960'>				<span class="nx">unquoted</span> <span class="o">=</span> <span class="o">!</span><span class="nx">match</span><span class="p">[</span><span class="mi">5</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nx">match</span><span class="p">[</span><span class="mi">2</span><span class="p">];</span></div><div class='line' id='LC961'><br/></div><div class='line' id='LC962'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">matchExpr</span><span class="p">[</span><span class="s2">&quot;CHILD&quot;</span><span class="p">].</span><span class="nx">test</span><span class="p">(</span> <span class="nx">match</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC963'>				<span class="k">return</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC964'>			<span class="p">}</span></div><div class='line' id='LC965'><br/></div><div class='line' id='LC966'>			<span class="c1">// Accept quoted arguments as-is</span></div><div class='line' id='LC967'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">match</span><span class="p">[</span><span class="mi">4</span><span class="p">]</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC968'>				<span class="nx">match</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span> <span class="o">=</span> <span class="nx">match</span><span class="p">[</span><span class="mi">4</span><span class="p">];</span></div><div class='line' id='LC969'><br/></div><div class='line' id='LC970'>			<span class="c1">// Strip excess characters from unquoted arguments</span></div><div class='line' id='LC971'>			<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="nx">unquoted</span> <span class="o">&amp;&amp;</span> <span class="nx">rpseudo</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span> <span class="nx">unquoted</span> <span class="p">)</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC972'>				<span class="c1">// Get excess from tokenize (recursively)</span></div><div class='line' id='LC973'>				<span class="p">(</span><span class="nx">excess</span> <span class="o">=</span> <span class="nx">tokenize</span><span class="p">(</span> <span class="nx">unquoted</span><span class="p">,</span> <span class="kc">true</span> <span class="p">))</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC974'>				<span class="c1">// advance to the next closing parenthesis</span></div><div class='line' id='LC975'>				<span class="p">(</span><span class="nx">excess</span> <span class="o">=</span> <span class="nx">unquoted</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span> <span class="s2">&quot;)&quot;</span><span class="p">,</span> <span class="nx">unquoted</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="nx">excess</span> <span class="p">)</span> <span class="o">-</span> <span class="nx">unquoted</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC976'><br/></div><div class='line' id='LC977'>				<span class="c1">// excess is a negative index</span></div><div class='line' id='LC978'>				<span class="nx">match</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">=</span> <span class="nx">match</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">slice</span><span class="p">(</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">excess</span> <span class="p">);</span></div><div class='line' id='LC979'>				<span class="nx">match</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span> <span class="o">=</span> <span class="nx">unquoted</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">excess</span> <span class="p">);</span></div><div class='line' id='LC980'>			<span class="p">}</span></div><div class='line' id='LC981'><br/></div><div class='line' id='LC982'>			<span class="c1">// Return only captures needed by the pseudo filter method (type and argument)</span></div><div class='line' id='LC983'>			<span class="k">return</span> <span class="nx">match</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">3</span> <span class="p">);</span></div><div class='line' id='LC984'>		<span class="p">}</span></div><div class='line' id='LC985'>	<span class="p">},</span></div><div class='line' id='LC986'><br/></div><div class='line' id='LC987'>	<span class="nx">filter</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC988'><br/></div><div class='line' id='LC989'>		<span class="s2">&quot;TAG&quot;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">nodeNameSelector</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC990'>			<span class="kd">var</span> <span class="nx">nodeName</span> <span class="o">=</span> <span class="nx">nodeNameSelector</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="nx">runescape</span><span class="p">,</span> <span class="nx">funescape</span> <span class="p">).</span><span class="nx">toLowerCase</span><span class="p">();</span></div><div class='line' id='LC991'>			<span class="k">return</span> <span class="nx">nodeNameSelector</span> <span class="o">===</span> <span class="s2">&quot;*&quot;</span> <span class="o">?</span></div><div class='line' id='LC992'>				<span class="kd">function</span><span class="p">()</span> <span class="p">{</span> <span class="k">return</span> <span class="kc">true</span><span class="p">;</span> <span class="p">}</span> <span class="o">:</span></div><div class='line' id='LC993'>				<span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC994'>					<span class="k">return</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">nodeName</span> <span class="o">&amp;&amp;</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">nodeName</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span> <span class="o">===</span> <span class="nx">nodeName</span><span class="p">;</span></div><div class='line' id='LC995'>				<span class="p">};</span></div><div class='line' id='LC996'>		<span class="p">},</span></div><div class='line' id='LC997'><br/></div><div class='line' id='LC998'>		<span class="s2">&quot;CLASS&quot;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">className</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC999'>			<span class="kd">var</span> <span class="nx">pattern</span> <span class="o">=</span> <span class="nx">classCache</span><span class="p">[</span> <span class="nx">className</span> <span class="o">+</span> <span class="s2">&quot; &quot;</span> <span class="p">];</span></div><div class='line' id='LC1000'><br/></div><div class='line' id='LC1001'>			<span class="k">return</span> <span class="nx">pattern</span> <span class="o">||</span></div><div class='line' id='LC1002'>				<span class="p">(</span><span class="nx">pattern</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span> <span class="s2">&quot;(^|&quot;</span> <span class="o">+</span> <span class="nx">whitespace</span> <span class="o">+</span> <span class="s2">&quot;)&quot;</span> <span class="o">+</span> <span class="nx">className</span> <span class="o">+</span> <span class="s2">&quot;(&quot;</span> <span class="o">+</span> <span class="nx">whitespace</span> <span class="o">+</span> <span class="s2">&quot;|$)&quot;</span> <span class="p">))</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC1003'>				<span class="nx">classCache</span><span class="p">(</span> <span class="nx">className</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1004'>					<span class="k">return</span> <span class="nx">pattern</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span> <span class="k">typeof</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">className</span> <span class="o">===</span> <span class="s2">&quot;string&quot;</span> <span class="o">&amp;&amp;</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">className</span> <span class="o">||</span> <span class="k">typeof</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">getAttribute</span> <span class="o">!==</span> <span class="nx">strundefined</span> <span class="o">&amp;&amp;</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;class&quot;</span><span class="p">)</span> <span class="o">||</span> <span class="s2">&quot;&quot;</span> <span class="p">);</span></div><div class='line' id='LC1005'>				<span class="p">});</span></div><div class='line' id='LC1006'>		<span class="p">},</span></div><div class='line' id='LC1007'><br/></div><div class='line' id='LC1008'>		<span class="s2">&quot;ATTR&quot;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">operator</span><span class="p">,</span> <span class="nx">check</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1009'>			<span class="k">return</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1010'>				<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="nx">Sizzle</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span> <span class="nx">elem</span><span class="p">,</span> <span class="nx">name</span> <span class="p">);</span></div><div class='line' id='LC1011'><br/></div><div class='line' id='LC1012'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">result</span> <span class="o">==</span> <span class="kc">null</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1013'>					<span class="k">return</span> <span class="nx">operator</span> <span class="o">===</span> <span class="s2">&quot;!=&quot;</span><span class="p">;</span></div><div class='line' id='LC1014'>				<span class="p">}</span></div><div class='line' id='LC1015'>				<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">operator</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1016'>					<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1017'>				<span class="p">}</span></div><div class='line' id='LC1018'><br/></div><div class='line' id='LC1019'>				<span class="nx">result</span> <span class="o">+=</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></div><div class='line' id='LC1020'><br/></div><div class='line' id='LC1021'>				<span class="k">return</span> <span class="nx">operator</span> <span class="o">===</span> <span class="s2">&quot;=&quot;</span> <span class="o">?</span> <span class="nx">result</span> <span class="o">===</span> <span class="nx">check</span> <span class="o">:</span></div><div class='line' id='LC1022'>					<span class="nx">operator</span> <span class="o">===</span> <span class="s2">&quot;!=&quot;</span> <span class="o">?</span> <span class="nx">result</span> <span class="o">!==</span> <span class="nx">check</span> <span class="o">:</span></div><div class='line' id='LC1023'>					<span class="nx">operator</span> <span class="o">===</span> <span class="s2">&quot;^=&quot;</span> <span class="o">?</span> <span class="nx">check</span> <span class="o">&amp;&amp;</span> <span class="nx">result</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span> <span class="nx">check</span> <span class="p">)</span> <span class="o">===</span> <span class="mi">0</span> <span class="o">:</span></div><div class='line' id='LC1024'>					<span class="nx">operator</span> <span class="o">===</span> <span class="s2">&quot;*=&quot;</span> <span class="o">?</span> <span class="nx">check</span> <span class="o">&amp;&amp;</span> <span class="nx">result</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span> <span class="nx">check</span> <span class="p">)</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span> <span class="o">:</span></div><div class='line' id='LC1025'>					<span class="nx">operator</span> <span class="o">===</span> <span class="s2">&quot;$=&quot;</span> <span class="o">?</span> <span class="nx">check</span> <span class="o">&amp;&amp;</span> <span class="nx">result</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span> <span class="o">-</span><span class="nx">check</span><span class="p">.</span><span class="nx">length</span> <span class="p">)</span> <span class="o">===</span> <span class="nx">check</span> <span class="o">:</span></div><div class='line' id='LC1026'>					<span class="nx">operator</span> <span class="o">===</span> <span class="s2">&quot;~=&quot;</span> <span class="o">?</span> <span class="p">(</span> <span class="s2">&quot; &quot;</span> <span class="o">+</span> <span class="nx">result</span> <span class="o">+</span> <span class="s2">&quot; &quot;</span> <span class="p">).</span><span class="nx">indexOf</span><span class="p">(</span> <span class="nx">check</span> <span class="p">)</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span> <span class="o">:</span></div><div class='line' id='LC1027'>					<span class="nx">operator</span> <span class="o">===</span> <span class="s2">&quot;|=&quot;</span> <span class="o">?</span> <span class="nx">result</span> <span class="o">===</span> <span class="nx">check</span> <span class="o">||</span> <span class="nx">result</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">check</span><span class="p">.</span><span class="nx">length</span> <span class="o">+</span> <span class="mi">1</span> <span class="p">)</span> <span class="o">===</span> <span class="nx">check</span> <span class="o">+</span> <span class="s2">&quot;-&quot;</span> <span class="o">:</span></div><div class='line' id='LC1028'>					<span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1029'>			<span class="p">};</span></div><div class='line' id='LC1030'>		<span class="p">},</span></div><div class='line' id='LC1031'><br/></div><div class='line' id='LC1032'>		<span class="s2">&quot;CHILD&quot;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">type</span><span class="p">,</span> <span class="nx">what</span><span class="p">,</span> <span class="nx">argument</span><span class="p">,</span> <span class="nx">first</span><span class="p">,</span> <span class="nx">last</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1033'>			<span class="kd">var</span> <span class="nx">simple</span> <span class="o">=</span> <span class="nx">type</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">3</span> <span class="p">)</span> <span class="o">!==</span> <span class="s2">&quot;nth&quot;</span><span class="p">,</span></div><div class='line' id='LC1034'>				<span class="nx">forward</span> <span class="o">=</span> <span class="nx">type</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span> <span class="o">-</span><span class="mi">4</span> <span class="p">)</span> <span class="o">!==</span> <span class="s2">&quot;last&quot;</span><span class="p">,</span></div><div class='line' id='LC1035'>				<span class="nx">ofType</span> <span class="o">=</span> <span class="nx">what</span> <span class="o">===</span> <span class="s2">&quot;of-type&quot;</span><span class="p">;</span></div><div class='line' id='LC1036'><br/></div><div class='line' id='LC1037'>			<span class="k">return</span> <span class="nx">first</span> <span class="o">===</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="nx">last</span> <span class="o">===</span> <span class="mi">0</span> <span class="o">?</span></div><div class='line' id='LC1038'><br/></div><div class='line' id='LC1039'>				<span class="c1">// Shortcut for :nth-*(n)</span></div><div class='line' id='LC1040'>				<span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1041'>					<span class="k">return</span> <span class="o">!!</span><span class="nx">elem</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">;</span></div><div class='line' id='LC1042'>				<span class="p">}</span> <span class="o">:</span></div><div class='line' id='LC1043'><br/></div><div class='line' id='LC1044'>				<span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span><span class="p">,</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">xml</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1045'>					<span class="kd">var</span> <span class="nx">cache</span><span class="p">,</span> <span class="nx">outerCache</span><span class="p">,</span> <span class="nx">node</span><span class="p">,</span> <span class="nx">diff</span><span class="p">,</span> <span class="nx">nodeIndex</span><span class="p">,</span> <span class="nx">start</span><span class="p">,</span></div><div class='line' id='LC1046'>						<span class="nx">dir</span> <span class="o">=</span> <span class="nx">simple</span> <span class="o">!==</span> <span class="nx">forward</span> <span class="o">?</span> <span class="s2">&quot;nextSibling&quot;</span> <span class="o">:</span> <span class="s2">&quot;previousSibling&quot;</span><span class="p">,</span></div><div class='line' id='LC1047'>						<span class="nx">parent</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">,</span></div><div class='line' id='LC1048'>						<span class="nx">name</span> <span class="o">=</span> <span class="nx">ofType</span> <span class="o">&amp;&amp;</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">nodeName</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">(),</span></div><div class='line' id='LC1049'>						<span class="nx">useCache</span> <span class="o">=</span> <span class="o">!</span><span class="nx">xml</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">ofType</span><span class="p">;</span></div><div class='line' id='LC1050'><br/></div><div class='line' id='LC1051'>					<span class="k">if</span> <span class="p">(</span> <span class="nx">parent</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1052'><br/></div><div class='line' id='LC1053'>						<span class="c1">// :(first|last|only)-(child|of-type)</span></div><div class='line' id='LC1054'>						<span class="k">if</span> <span class="p">(</span> <span class="nx">simple</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1055'>							<span class="k">while</span> <span class="p">(</span> <span class="nx">dir</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1056'>								<span class="nx">node</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">;</span></div><div class='line' id='LC1057'>								<span class="k">while</span> <span class="p">(</span> <span class="p">(</span><span class="nx">node</span> <span class="o">=</span> <span class="nx">node</span><span class="p">[</span> <span class="nx">dir</span> <span class="p">])</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1058'>									<span class="k">if</span> <span class="p">(</span> <span class="nx">ofType</span> <span class="o">?</span> <span class="nx">node</span><span class="p">.</span><span class="nx">nodeName</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span> <span class="o">===</span> <span class="nx">name</span> <span class="o">:</span> <span class="nx">node</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">1</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1059'>										<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1060'>									<span class="p">}</span></div><div class='line' id='LC1061'>								<span class="p">}</span></div><div class='line' id='LC1062'>								<span class="c1">// Reverse direction for :only-* (if we haven&#39;t yet done so)</span></div><div class='line' id='LC1063'>								<span class="nx">start</span> <span class="o">=</span> <span class="nx">dir</span> <span class="o">=</span> <span class="nx">type</span> <span class="o">===</span> <span class="s2">&quot;only&quot;</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">start</span> <span class="o">&amp;&amp;</span> <span class="s2">&quot;nextSibling&quot;</span><span class="p">;</span></div><div class='line' id='LC1064'>							<span class="p">}</span></div><div class='line' id='LC1065'>							<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1066'>						<span class="p">}</span></div><div class='line' id='LC1067'><br/></div><div class='line' id='LC1068'>						<span class="nx">start</span> <span class="o">=</span> <span class="p">[</span> <span class="nx">forward</span> <span class="o">?</span> <span class="nx">parent</span><span class="p">.</span><span class="nx">firstChild</span> <span class="o">:</span> <span class="nx">parent</span><span class="p">.</span><span class="nx">lastChild</span> <span class="p">];</span></div><div class='line' id='LC1069'><br/></div><div class='line' id='LC1070'>						<span class="c1">// non-xml :nth-child(...) stores cache data on `parent`</span></div><div class='line' id='LC1071'>						<span class="k">if</span> <span class="p">(</span> <span class="nx">forward</span> <span class="o">&amp;&amp;</span> <span class="nx">useCache</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1072'>							<span class="c1">// Seek `elem` from a previously-cached index</span></div><div class='line' id='LC1073'>							<span class="nx">outerCache</span> <span class="o">=</span> <span class="nx">parent</span><span class="p">[</span> <span class="nx">expando</span> <span class="p">]</span> <span class="o">||</span> <span class="p">(</span><span class="nx">parent</span><span class="p">[</span> <span class="nx">expando</span> <span class="p">]</span> <span class="o">=</span> <span class="p">{});</span></div><div class='line' id='LC1074'>							<span class="nx">cache</span> <span class="o">=</span> <span class="nx">outerCache</span><span class="p">[</span> <span class="nx">type</span> <span class="p">]</span> <span class="o">||</span> <span class="p">[];</span></div><div class='line' id='LC1075'>							<span class="nx">nodeIndex</span> <span class="o">=</span> <span class="nx">cache</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">===</span> <span class="nx">dirruns</span> <span class="o">&amp;&amp;</span> <span class="nx">cache</span><span class="p">[</span><span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC1076'>							<span class="nx">diff</span> <span class="o">=</span> <span class="nx">cache</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">===</span> <span class="nx">dirruns</span> <span class="o">&amp;&amp;</span> <span class="nx">cache</span><span class="p">[</span><span class="mi">2</span><span class="p">];</span></div><div class='line' id='LC1077'>							<span class="nx">node</span> <span class="o">=</span> <span class="nx">nodeIndex</span> <span class="o">&amp;&amp;</span> <span class="nx">parent</span><span class="p">.</span><span class="nx">childNodes</span><span class="p">[</span> <span class="nx">nodeIndex</span> <span class="p">];</span></div><div class='line' id='LC1078'><br/></div><div class='line' id='LC1079'>							<span class="k">while</span> <span class="p">(</span> <span class="p">(</span><span class="nx">node</span> <span class="o">=</span> <span class="o">++</span><span class="nx">nodeIndex</span> <span class="o">&amp;&amp;</span> <span class="nx">node</span> <span class="o">&amp;&amp;</span> <span class="nx">node</span><span class="p">[</span> <span class="nx">dir</span> <span class="p">]</span> <span class="o">||</span></div><div class='line' id='LC1080'><br/></div><div class='line' id='LC1081'>								<span class="c1">// Fallback to seeking `elem` from the start</span></div><div class='line' id='LC1082'>								<span class="p">(</span><span class="nx">diff</span> <span class="o">=</span> <span class="nx">nodeIndex</span> <span class="o">=</span> <span class="mi">0</span><span class="p">)</span> <span class="o">||</span> <span class="nx">start</span><span class="p">.</span><span class="nx">pop</span><span class="p">())</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1083'><br/></div><div class='line' id='LC1084'>								<span class="c1">// When found, cache indexes on `parent` and break</span></div><div class='line' id='LC1085'>								<span class="k">if</span> <span class="p">(</span> <span class="nx">node</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="o">++</span><span class="nx">diff</span> <span class="o">&amp;&amp;</span> <span class="nx">node</span> <span class="o">===</span> <span class="nx">elem</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1086'>									<span class="nx">outerCache</span><span class="p">[</span> <span class="nx">type</span> <span class="p">]</span> <span class="o">=</span> <span class="p">[</span> <span class="nx">dirruns</span><span class="p">,</span> <span class="nx">nodeIndex</span><span class="p">,</span> <span class="nx">diff</span> <span class="p">];</span></div><div class='line' id='LC1087'>									<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC1088'>								<span class="p">}</span></div><div class='line' id='LC1089'>							<span class="p">}</span></div><div class='line' id='LC1090'><br/></div><div class='line' id='LC1091'>						<span class="c1">// Use previously-cached element index if available</span></div><div class='line' id='LC1092'>						<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="nx">useCache</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">cache</span> <span class="o">=</span> <span class="p">(</span><span class="nx">elem</span><span class="p">[</span> <span class="nx">expando</span> <span class="p">]</span> <span class="o">||</span> <span class="p">(</span><span class="nx">elem</span><span class="p">[</span> <span class="nx">expando</span> <span class="p">]</span> <span class="o">=</span> <span class="p">{}))[</span> <span class="nx">type</span> <span class="p">])</span> <span class="o">&amp;&amp;</span> <span class="nx">cache</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">===</span> <span class="nx">dirruns</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1093'>							<span class="nx">diff</span> <span class="o">=</span> <span class="nx">cache</span><span class="p">[</span><span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC1094'><br/></div><div class='line' id='LC1095'>						<span class="c1">// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)</span></div><div class='line' id='LC1096'>						<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1097'>							<span class="c1">// Use the same loop as above to seek `elem` from the start</span></div><div class='line' id='LC1098'>							<span class="k">while</span> <span class="p">(</span> <span class="p">(</span><span class="nx">node</span> <span class="o">=</span> <span class="o">++</span><span class="nx">nodeIndex</span> <span class="o">&amp;&amp;</span> <span class="nx">node</span> <span class="o">&amp;&amp;</span> <span class="nx">node</span><span class="p">[</span> <span class="nx">dir</span> <span class="p">]</span> <span class="o">||</span></div><div class='line' id='LC1099'>								<span class="p">(</span><span class="nx">diff</span> <span class="o">=</span> <span class="nx">nodeIndex</span> <span class="o">=</span> <span class="mi">0</span><span class="p">)</span> <span class="o">||</span> <span class="nx">start</span><span class="p">.</span><span class="nx">pop</span><span class="p">())</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1100'><br/></div><div class='line' id='LC1101'>								<span class="k">if</span> <span class="p">(</span> <span class="p">(</span> <span class="nx">ofType</span> <span class="o">?</span> <span class="nx">node</span><span class="p">.</span><span class="nx">nodeName</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span> <span class="o">===</span> <span class="nx">name</span> <span class="o">:</span> <span class="nx">node</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">1</span> <span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">++</span><span class="nx">diff</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1102'>									<span class="c1">// Cache the index of each encountered element</span></div><div class='line' id='LC1103'>									<span class="k">if</span> <span class="p">(</span> <span class="nx">useCache</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1104'>										<span class="p">(</span><span class="nx">node</span><span class="p">[</span> <span class="nx">expando</span> <span class="p">]</span> <span class="o">||</span> <span class="p">(</span><span class="nx">node</span><span class="p">[</span> <span class="nx">expando</span> <span class="p">]</span> <span class="o">=</span> <span class="p">{}))[</span> <span class="nx">type</span> <span class="p">]</span> <span class="o">=</span> <span class="p">[</span> <span class="nx">dirruns</span><span class="p">,</span> <span class="nx">diff</span> <span class="p">];</span></div><div class='line' id='LC1105'>									<span class="p">}</span></div><div class='line' id='LC1106'><br/></div><div class='line' id='LC1107'>									<span class="k">if</span> <span class="p">(</span> <span class="nx">node</span> <span class="o">===</span> <span class="nx">elem</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1108'>										<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC1109'>									<span class="p">}</span></div><div class='line' id='LC1110'>								<span class="p">}</span></div><div class='line' id='LC1111'>							<span class="p">}</span></div><div class='line' id='LC1112'>						<span class="p">}</span></div><div class='line' id='LC1113'><br/></div><div class='line' id='LC1114'>						<span class="c1">// Incorporate the offset, then check against cycle size</span></div><div class='line' id='LC1115'>						<span class="nx">diff</span> <span class="o">-=</span> <span class="nx">last</span><span class="p">;</span></div><div class='line' id='LC1116'>						<span class="k">return</span> <span class="nx">diff</span> <span class="o">===</span> <span class="nx">first</span> <span class="o">||</span> <span class="p">(</span> <span class="nx">diff</span> <span class="o">%</span> <span class="nx">first</span> <span class="o">===</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">diff</span> <span class="o">/</span> <span class="nx">first</span> <span class="o">&gt;=</span> <span class="mi">0</span> <span class="p">);</span></div><div class='line' id='LC1117'>					<span class="p">}</span></div><div class='line' id='LC1118'>				<span class="p">};</span></div><div class='line' id='LC1119'>		<span class="p">},</span></div><div class='line' id='LC1120'><br/></div><div class='line' id='LC1121'>		<span class="s2">&quot;PSEUDO&quot;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">pseudo</span><span class="p">,</span> <span class="nx">argument</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1122'>			<span class="c1">// pseudo-class names are case-insensitive</span></div><div class='line' id='LC1123'>			<span class="c1">// http://www.w3.org/TR/selectors/#pseudo-classes</span></div><div class='line' id='LC1124'>			<span class="c1">// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters</span></div><div class='line' id='LC1125'>			<span class="c1">// Remember that setFilters inherits from pseudos</span></div><div class='line' id='LC1126'>			<span class="kd">var</span> <span class="nx">args</span><span class="p">,</span></div><div class='line' id='LC1127'>				<span class="nx">fn</span> <span class="o">=</span> <span class="nx">Expr</span><span class="p">.</span><span class="nx">pseudos</span><span class="p">[</span> <span class="nx">pseudo</span> <span class="p">]</span> <span class="o">||</span> <span class="nx">Expr</span><span class="p">.</span><span class="nx">setFilters</span><span class="p">[</span> <span class="nx">pseudo</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span> <span class="p">]</span> <span class="o">||</span></div><div class='line' id='LC1128'>					<span class="nx">Sizzle</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span> <span class="s2">&quot;unsupported pseudo: &quot;</span> <span class="o">+</span> <span class="nx">pseudo</span> <span class="p">);</span></div><div class='line' id='LC1129'><br/></div><div class='line' id='LC1130'>			<span class="c1">// The user may use createPseudo to indicate that</span></div><div class='line' id='LC1131'>			<span class="c1">// arguments are needed to create the filter function</span></div><div class='line' id='LC1132'>			<span class="c1">// just as Sizzle does</span></div><div class='line' id='LC1133'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">fn</span><span class="p">[</span> <span class="nx">expando</span> <span class="p">]</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1134'>				<span class="k">return</span> <span class="nx">fn</span><span class="p">(</span> <span class="nx">argument</span> <span class="p">);</span></div><div class='line' id='LC1135'>			<span class="p">}</span></div><div class='line' id='LC1136'><br/></div><div class='line' id='LC1137'>			<span class="c1">// But maintain support for old signatures</span></div><div class='line' id='LC1138'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">fn</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">1</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1139'>				<span class="nx">args</span> <span class="o">=</span> <span class="p">[</span> <span class="nx">pseudo</span><span class="p">,</span> <span class="nx">pseudo</span><span class="p">,</span> <span class="s2">&quot;&quot;</span><span class="p">,</span> <span class="nx">argument</span> <span class="p">];</span></div><div class='line' id='LC1140'>				<span class="k">return</span> <span class="nx">Expr</span><span class="p">.</span><span class="nx">setFilters</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span> <span class="nx">pseudo</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span> <span class="p">)</span> <span class="o">?</span></div><div class='line' id='LC1141'>					<span class="nx">markFunction</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">seed</span><span class="p">,</span> <span class="nx">matches</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1142'>						<span class="kd">var</span> <span class="nx">idx</span><span class="p">,</span></div><div class='line' id='LC1143'>							<span class="nx">matched</span> <span class="o">=</span> <span class="nx">fn</span><span class="p">(</span> <span class="nx">seed</span><span class="p">,</span> <span class="nx">argument</span> <span class="p">),</span></div><div class='line' id='LC1144'>							<span class="nx">i</span> <span class="o">=</span> <span class="nx">matched</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC1145'>						<span class="k">while</span> <span class="p">(</span> <span class="nx">i</span><span class="o">--</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1146'>							<span class="nx">idx</span> <span class="o">=</span> <span class="nx">indexOf</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span> <span class="nx">seed</span><span class="p">,</span> <span class="nx">matched</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="p">);</span></div><div class='line' id='LC1147'>							<span class="nx">seed</span><span class="p">[</span> <span class="nx">idx</span> <span class="p">]</span> <span class="o">=</span> <span class="o">!</span><span class="p">(</span> <span class="nx">matches</span><span class="p">[</span> <span class="nx">idx</span> <span class="p">]</span> <span class="o">=</span> <span class="nx">matched</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="p">);</span></div><div class='line' id='LC1148'>						<span class="p">}</span></div><div class='line' id='LC1149'>					<span class="p">})</span> <span class="o">:</span></div><div class='line' id='LC1150'>					<span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1151'>						<span class="k">return</span> <span class="nx">fn</span><span class="p">(</span> <span class="nx">elem</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">args</span> <span class="p">);</span></div><div class='line' id='LC1152'>					<span class="p">};</span></div><div class='line' id='LC1153'>			<span class="p">}</span></div><div class='line' id='LC1154'><br/></div><div class='line' id='LC1155'>			<span class="k">return</span> <span class="nx">fn</span><span class="p">;</span></div><div class='line' id='LC1156'>		<span class="p">}</span></div><div class='line' id='LC1157'>	<span class="p">},</span></div><div class='line' id='LC1158'><br/></div><div class='line' id='LC1159'>	<span class="nx">pseudos</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC1160'>		<span class="c1">// Potentially complex pseudos</span></div><div class='line' id='LC1161'>		<span class="s2">&quot;not&quot;</span><span class="o">:</span> <span class="nx">markFunction</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">selector</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1162'>			<span class="c1">// Trim the selector passed to compile</span></div><div class='line' id='LC1163'>			<span class="c1">// to avoid treating leading and trailing</span></div><div class='line' id='LC1164'>			<span class="c1">// spaces as combinators</span></div><div class='line' id='LC1165'>			<span class="kd">var</span> <span class="nx">input</span> <span class="o">=</span> <span class="p">[],</span></div><div class='line' id='LC1166'>				<span class="nx">results</span> <span class="o">=</span> <span class="p">[],</span></div><div class='line' id='LC1167'>				<span class="nx">matcher</span> <span class="o">=</span> <span class="nx">compile</span><span class="p">(</span> <span class="nx">selector</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="nx">rtrim</span><span class="p">,</span> <span class="s2">&quot;$1&quot;</span> <span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC1168'><br/></div><div class='line' id='LC1169'>			<span class="k">return</span> <span class="nx">matcher</span><span class="p">[</span> <span class="nx">expando</span> <span class="p">]</span> <span class="o">?</span></div><div class='line' id='LC1170'>				<span class="nx">markFunction</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">seed</span><span class="p">,</span> <span class="nx">matches</span><span class="p">,</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">xml</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1171'>					<span class="kd">var</span> <span class="nx">elem</span><span class="p">,</span></div><div class='line' id='LC1172'>						<span class="nx">unmatched</span> <span class="o">=</span> <span class="nx">matcher</span><span class="p">(</span> <span class="nx">seed</span><span class="p">,</span> <span class="kc">null</span><span class="p">,</span> <span class="nx">xml</span><span class="p">,</span> <span class="p">[]</span> <span class="p">),</span></div><div class='line' id='LC1173'>						<span class="nx">i</span> <span class="o">=</span> <span class="nx">seed</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC1174'><br/></div><div class='line' id='LC1175'>					<span class="c1">// Match elements unmatched by `matcher`</span></div><div class='line' id='LC1176'>					<span class="k">while</span> <span class="p">(</span> <span class="nx">i</span><span class="o">--</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1177'>						<span class="k">if</span> <span class="p">(</span> <span class="p">(</span><span class="nx">elem</span> <span class="o">=</span> <span class="nx">unmatched</span><span class="p">[</span><span class="nx">i</span><span class="p">])</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1178'>							<span class="nx">seed</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="o">!</span><span class="p">(</span><span class="nx">matches</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">);</span></div><div class='line' id='LC1179'>						<span class="p">}</span></div><div class='line' id='LC1180'>					<span class="p">}</span></div><div class='line' id='LC1181'>				<span class="p">})</span> <span class="o">:</span></div><div class='line' id='LC1182'>				<span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span><span class="p">,</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">xml</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1183'>					<span class="nx">input</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">;</span></div><div class='line' id='LC1184'>					<span class="nx">matcher</span><span class="p">(</span> <span class="nx">input</span><span class="p">,</span> <span class="kc">null</span><span class="p">,</span> <span class="nx">xml</span><span class="p">,</span> <span class="nx">results</span> <span class="p">);</span></div><div class='line' id='LC1185'>					<span class="k">return</span> <span class="o">!</span><span class="nx">results</span><span class="p">.</span><span class="nx">pop</span><span class="p">();</span></div><div class='line' id='LC1186'>				<span class="p">};</span></div><div class='line' id='LC1187'>		<span class="p">}),</span></div><div class='line' id='LC1188'><br/></div><div class='line' id='LC1189'>		<span class="s2">&quot;has&quot;</span><span class="o">:</span> <span class="nx">markFunction</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">selector</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1190'>			<span class="k">return</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1191'>				<span class="k">return</span> <span class="nx">Sizzle</span><span class="p">(</span> <span class="nx">selector</span><span class="p">,</span> <span class="nx">elem</span> <span class="p">).</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1192'>			<span class="p">};</span></div><div class='line' id='LC1193'>		<span class="p">}),</span></div><div class='line' id='LC1194'><br/></div><div class='line' id='LC1195'>		<span class="s2">&quot;contains&quot;</span><span class="o">:</span> <span class="nx">markFunction</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">text</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1196'>			<span class="k">return</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1197'>				<span class="k">return</span> <span class="p">(</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">textContent</span> <span class="o">||</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">innerText</span> <span class="o">||</span> <span class="nx">getText</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">)</span> <span class="p">).</span><span class="nx">indexOf</span><span class="p">(</span> <span class="nx">text</span> <span class="p">)</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC1198'>			<span class="p">};</span></div><div class='line' id='LC1199'>		<span class="p">}),</span></div><div class='line' id='LC1200'><br/></div><div class='line' id='LC1201'>		<span class="c1">// &quot;Whether an element is represented by a :lang() selector</span></div><div class='line' id='LC1202'>		<span class="c1">// is based solely on the element&#39;s language value</span></div><div class='line' id='LC1203'>		<span class="c1">// being equal to the identifier C,</span></div><div class='line' id='LC1204'>		<span class="c1">// or beginning with the identifier C immediately followed by &quot;-&quot;.</span></div><div class='line' id='LC1205'>		<span class="c1">// The matching of C against the element&#39;s language value is performed case-insensitively.</span></div><div class='line' id='LC1206'>		<span class="c1">// The identifier C does not have to be a valid language name.&quot;</span></div><div class='line' id='LC1207'>		<span class="c1">// http://www.w3.org/TR/selectors/#lang-pseudo</span></div><div class='line' id='LC1208'>		<span class="s2">&quot;lang&quot;</span><span class="o">:</span> <span class="nx">markFunction</span><span class="p">(</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">lang</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1209'>			<span class="c1">// lang value must be a valid identifier</span></div><div class='line' id='LC1210'>			<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">ridentifier</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">lang</span> <span class="o">||</span> <span class="s2">&quot;&quot;</span><span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1211'>				<span class="nx">Sizzle</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span> <span class="s2">&quot;unsupported lang: &quot;</span> <span class="o">+</span> <span class="nx">lang</span> <span class="p">);</span></div><div class='line' id='LC1212'>			<span class="p">}</span></div><div class='line' id='LC1213'>			<span class="nx">lang</span> <span class="o">=</span> <span class="nx">lang</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="nx">runescape</span><span class="p">,</span> <span class="nx">funescape</span> <span class="p">).</span><span class="nx">toLowerCase</span><span class="p">();</span></div><div class='line' id='LC1214'>			<span class="k">return</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1215'>				<span class="kd">var</span> <span class="nx">elemLang</span><span class="p">;</span></div><div class='line' id='LC1216'>				<span class="k">do</span> <span class="p">{</span></div><div class='line' id='LC1217'>					<span class="k">if</span> <span class="p">(</span> <span class="p">(</span><span class="nx">elemLang</span> <span class="o">=</span> <span class="nx">documentIsHTML</span> <span class="o">?</span></div><div class='line' id='LC1218'>						<span class="nx">elem</span><span class="p">.</span><span class="nx">lang</span> <span class="o">:</span></div><div class='line' id='LC1219'>						<span class="nx">elem</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;xml:lang&quot;</span><span class="p">)</span> <span class="o">||</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;lang&quot;</span><span class="p">))</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1220'><br/></div><div class='line' id='LC1221'>						<span class="nx">elemLang</span> <span class="o">=</span> <span class="nx">elemLang</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">();</span></div><div class='line' id='LC1222'>						<span class="k">return</span> <span class="nx">elemLang</span> <span class="o">===</span> <span class="nx">lang</span> <span class="o">||</span> <span class="nx">elemLang</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span> <span class="nx">lang</span> <span class="o">+</span> <span class="s2">&quot;-&quot;</span> <span class="p">)</span> <span class="o">===</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1223'>					<span class="p">}</span></div><div class='line' id='LC1224'>				<span class="p">}</span> <span class="k">while</span> <span class="p">(</span> <span class="p">(</span><span class="nx">elem</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">1</span> <span class="p">);</span></div><div class='line' id='LC1225'>				<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1226'>			<span class="p">};</span></div><div class='line' id='LC1227'>		<span class="p">}),</span></div><div class='line' id='LC1228'><br/></div><div class='line' id='LC1229'>		<span class="c1">// Miscellaneous</span></div><div class='line' id='LC1230'>		<span class="s2">&quot;target&quot;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1231'>			<span class="kd">var</span> <span class="nx">hash</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">location</span> <span class="o">&amp;&amp;</span> <span class="nb">window</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">hash</span><span class="p">;</span></div><div class='line' id='LC1232'>			<span class="k">return</span> <span class="nx">hash</span> <span class="o">&amp;&amp;</span> <span class="nx">hash</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span> <span class="mi">1</span> <span class="p">)</span> <span class="o">===</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">id</span><span class="p">;</span></div><div class='line' id='LC1233'>		<span class="p">},</span></div><div class='line' id='LC1234'><br/></div><div class='line' id='LC1235'>		<span class="s2">&quot;root&quot;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1236'>			<span class="k">return</span> <span class="nx">elem</span> <span class="o">===</span> <span class="nx">docElem</span><span class="p">;</span></div><div class='line' id='LC1237'>		<span class="p">},</span></div><div class='line' id='LC1238'><br/></div><div class='line' id='LC1239'>		<span class="s2">&quot;focus&quot;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1240'>			<span class="k">return</span> <span class="nx">elem</span> <span class="o">===</span> <span class="nb">document</span><span class="p">.</span><span class="nx">activeElement</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="o">!</span><span class="nb">document</span><span class="p">.</span><span class="nx">hasFocus</span> <span class="o">||</span> <span class="nb">document</span><span class="p">.</span><span class="nx">hasFocus</span><span class="p">())</span> <span class="o">&amp;&amp;</span> <span class="o">!!</span><span class="p">(</span><span class="nx">elem</span><span class="p">.</span><span class="nx">type</span> <span class="o">||</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">href</span> <span class="o">||</span> <span class="o">~</span><span class="nx">elem</span><span class="p">.</span><span class="nx">tabIndex</span><span class="p">);</span></div><div class='line' id='LC1241'>		<span class="p">},</span></div><div class='line' id='LC1242'><br/></div><div class='line' id='LC1243'>		<span class="c1">// Boolean properties</span></div><div class='line' id='LC1244'>		<span class="s2">&quot;enabled&quot;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1245'>			<span class="k">return</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">disabled</span> <span class="o">===</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1246'>		<span class="p">},</span></div><div class='line' id='LC1247'><br/></div><div class='line' id='LC1248'>		<span class="s2">&quot;disabled&quot;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1249'>			<span class="k">return</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">disabled</span> <span class="o">===</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1250'>		<span class="p">},</span></div><div class='line' id='LC1251'><br/></div><div class='line' id='LC1252'>		<span class="s2">&quot;checked&quot;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1253'>			<span class="c1">// In CSS3, :checked should return both checked and selected elements</span></div><div class='line' id='LC1254'>			<span class="c1">// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked</span></div><div class='line' id='LC1255'>			<span class="kd">var</span> <span class="nx">nodeName</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">nodeName</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">();</span></div><div class='line' id='LC1256'>			<span class="k">return</span> <span class="p">(</span><span class="nx">nodeName</span> <span class="o">===</span> <span class="s2">&quot;input&quot;</span> <span class="o">&amp;&amp;</span> <span class="o">!!</span><span class="nx">elem</span><span class="p">.</span><span class="nx">checked</span><span class="p">)</span> <span class="o">||</span> <span class="p">(</span><span class="nx">nodeName</span> <span class="o">===</span> <span class="s2">&quot;option&quot;</span> <span class="o">&amp;&amp;</span> <span class="o">!!</span><span class="nx">elem</span><span class="p">.</span><span class="nx">selected</span><span class="p">);</span></div><div class='line' id='LC1257'>		<span class="p">},</span></div><div class='line' id='LC1258'><br/></div><div class='line' id='LC1259'>		<span class="s2">&quot;selected&quot;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1260'>			<span class="c1">// Accessing this property makes selected-by-default</span></div><div class='line' id='LC1261'>			<span class="c1">// options in Safari work properly</span></div><div class='line' id='LC1262'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">parentNode</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1263'>				<span class="nx">elem</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">selectedIndex</span><span class="p">;</span></div><div class='line' id='LC1264'>			<span class="p">}</span></div><div class='line' id='LC1265'><br/></div><div class='line' id='LC1266'>			<span class="k">return</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">selected</span> <span class="o">===</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1267'>		<span class="p">},</span></div><div class='line' id='LC1268'><br/></div><div class='line' id='LC1269'>		<span class="c1">// Contents</span></div><div class='line' id='LC1270'>		<span class="s2">&quot;empty&quot;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1271'>			<span class="c1">// http://www.w3.org/TR/selectors/#empty-pseudo</span></div><div class='line' id='LC1272'>			<span class="c1">// :empty is only affected by element nodes and content nodes(including text(3), cdata(4)),</span></div><div class='line' id='LC1273'>			<span class="c1">//   not comment, processing instructions, or others</span></div><div class='line' id='LC1274'>			<span class="c1">// Thanks to Diego Perini for the nodeName shortcut</span></div><div class='line' id='LC1275'>			<span class="c1">//   Greater than &quot;@&quot; means alpha characters (specifically not starting with &quot;#&quot; or &quot;?&quot;)</span></div><div class='line' id='LC1276'>			<span class="k">for</span> <span class="p">(</span> <span class="nx">elem</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">;</span> <span class="nx">elem</span><span class="p">;</span> <span class="nx">elem</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">nextSibling</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1277'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">nodeName</span> <span class="o">&gt;</span> <span class="s2">&quot;@&quot;</span> <span class="o">||</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">3</span> <span class="o">||</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">4</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1278'>					<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1279'>				<span class="p">}</span></div><div class='line' id='LC1280'>			<span class="p">}</span></div><div class='line' id='LC1281'>			<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1282'>		<span class="p">},</span></div><div class='line' id='LC1283'><br/></div><div class='line' id='LC1284'>		<span class="s2">&quot;parent&quot;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1285'>			<span class="k">return</span> <span class="o">!</span><span class="nx">Expr</span><span class="p">.</span><span class="nx">pseudos</span><span class="p">[</span><span class="s2">&quot;empty&quot;</span><span class="p">](</span> <span class="nx">elem</span> <span class="p">);</span></div><div class='line' id='LC1286'>		<span class="p">},</span></div><div class='line' id='LC1287'><br/></div><div class='line' id='LC1288'>		<span class="c1">// Element/input types</span></div><div class='line' id='LC1289'>		<span class="s2">&quot;header&quot;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1290'>			<span class="k">return</span> <span class="nx">rheader</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">nodeName</span> <span class="p">);</span></div><div class='line' id='LC1291'>		<span class="p">},</span></div><div class='line' id='LC1292'><br/></div><div class='line' id='LC1293'>		<span class="s2">&quot;input&quot;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1294'>			<span class="k">return</span> <span class="nx">rinputs</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">nodeName</span> <span class="p">);</span></div><div class='line' id='LC1295'>		<span class="p">},</span></div><div class='line' id='LC1296'><br/></div><div class='line' id='LC1297'>		<span class="s2">&quot;button&quot;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1298'>			<span class="kd">var</span> <span class="nx">name</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">nodeName</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">();</span></div><div class='line' id='LC1299'>			<span class="k">return</span> <span class="nx">name</span> <span class="o">===</span> <span class="s2">&quot;input&quot;</span> <span class="o">&amp;&amp;</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">type</span> <span class="o">===</span> <span class="s2">&quot;button&quot;</span> <span class="o">||</span> <span class="nx">name</span> <span class="o">===</span> <span class="s2">&quot;button&quot;</span><span class="p">;</span></div><div class='line' id='LC1300'>		<span class="p">},</span></div><div class='line' id='LC1301'><br/></div><div class='line' id='LC1302'>		<span class="s2">&quot;text&quot;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1303'>			<span class="kd">var</span> <span class="nx">attr</span><span class="p">;</span></div><div class='line' id='LC1304'>			<span class="c1">// IE6 and 7 will map elem.type to &#39;text&#39; for new HTML5 types (search, etc)</span></div><div class='line' id='LC1305'>			<span class="c1">// use getAttribute instead to test this case</span></div><div class='line' id='LC1306'>			<span class="k">return</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">nodeName</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span> <span class="o">===</span> <span class="s2">&quot;input&quot;</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC1307'>				<span class="nx">elem</span><span class="p">.</span><span class="nx">type</span> <span class="o">===</span> <span class="s2">&quot;text&quot;</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC1308'>				<span class="p">(</span> <span class="p">(</span><span class="nx">attr</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;type&quot;</span><span class="p">))</span> <span class="o">==</span> <span class="kc">null</span> <span class="o">||</span> <span class="nx">attr</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span> <span class="o">===</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">type</span> <span class="p">);</span></div><div class='line' id='LC1309'>		<span class="p">},</span></div><div class='line' id='LC1310'><br/></div><div class='line' id='LC1311'>		<span class="c1">// Position-in-collection</span></div><div class='line' id='LC1312'>		<span class="s2">&quot;first&quot;</span><span class="o">:</span> <span class="nx">createPositionalPseudo</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1313'>			<span class="k">return</span> <span class="p">[</span> <span class="mi">0</span> <span class="p">];</span></div><div class='line' id='LC1314'>		<span class="p">}),</span></div><div class='line' id='LC1315'><br/></div><div class='line' id='LC1316'>		<span class="s2">&quot;last&quot;</span><span class="o">:</span> <span class="nx">createPositionalPseudo</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">matchIndexes</span><span class="p">,</span> <span class="nx">length</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1317'>			<span class="k">return</span> <span class="p">[</span> <span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span> <span class="p">];</span></div><div class='line' id='LC1318'>		<span class="p">}),</span></div><div class='line' id='LC1319'><br/></div><div class='line' id='LC1320'>		<span class="s2">&quot;eq&quot;</span><span class="o">:</span> <span class="nx">createPositionalPseudo</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">matchIndexes</span><span class="p">,</span> <span class="nx">length</span><span class="p">,</span> <span class="nx">argument</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1321'>			<span class="k">return</span> <span class="p">[</span> <span class="nx">argument</span> <span class="o">&lt;</span> <span class="mi">0</span> <span class="o">?</span> <span class="nx">argument</span> <span class="o">+</span> <span class="nx">length</span> <span class="o">:</span> <span class="nx">argument</span> <span class="p">];</span></div><div class='line' id='LC1322'>		<span class="p">}),</span></div><div class='line' id='LC1323'><br/></div><div class='line' id='LC1324'>		<span class="s2">&quot;even&quot;</span><span class="o">:</span> <span class="nx">createPositionalPseudo</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">matchIndexes</span><span class="p">,</span> <span class="nx">length</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1325'>			<span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1326'>			<span class="k">for</span> <span class="p">(</span> <span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">+=</span> <span class="mi">2</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1327'>				<span class="nx">matchIndexes</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">i</span> <span class="p">);</span></div><div class='line' id='LC1328'>			<span class="p">}</span></div><div class='line' id='LC1329'>			<span class="k">return</span> <span class="nx">matchIndexes</span><span class="p">;</span></div><div class='line' id='LC1330'>		<span class="p">}),</span></div><div class='line' id='LC1331'><br/></div><div class='line' id='LC1332'>		<span class="s2">&quot;odd&quot;</span><span class="o">:</span> <span class="nx">createPositionalPseudo</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">matchIndexes</span><span class="p">,</span> <span class="nx">length</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1333'>			<span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC1334'>			<span class="k">for</span> <span class="p">(</span> <span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">+=</span> <span class="mi">2</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1335'>				<span class="nx">matchIndexes</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">i</span> <span class="p">);</span></div><div class='line' id='LC1336'>			<span class="p">}</span></div><div class='line' id='LC1337'>			<span class="k">return</span> <span class="nx">matchIndexes</span><span class="p">;</span></div><div class='line' id='LC1338'>		<span class="p">}),</span></div><div class='line' id='LC1339'><br/></div><div class='line' id='LC1340'>		<span class="s2">&quot;lt&quot;</span><span class="o">:</span> <span class="nx">createPositionalPseudo</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">matchIndexes</span><span class="p">,</span> <span class="nx">length</span><span class="p">,</span> <span class="nx">argument</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1341'>			<span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="nx">argument</span> <span class="o">&lt;</span> <span class="mi">0</span> <span class="o">?</span> <span class="nx">argument</span> <span class="o">+</span> <span class="nx">length</span> <span class="o">:</span> <span class="nx">argument</span><span class="p">;</span></div><div class='line' id='LC1342'>			<span class="k">for</span> <span class="p">(</span> <span class="p">;</span> <span class="o">--</span><span class="nx">i</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1343'>				<span class="nx">matchIndexes</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">i</span> <span class="p">);</span></div><div class='line' id='LC1344'>			<span class="p">}</span></div><div class='line' id='LC1345'>			<span class="k">return</span> <span class="nx">matchIndexes</span><span class="p">;</span></div><div class='line' id='LC1346'>		<span class="p">}),</span></div><div class='line' id='LC1347'><br/></div><div class='line' id='LC1348'>		<span class="s2">&quot;gt&quot;</span><span class="o">:</span> <span class="nx">createPositionalPseudo</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">matchIndexes</span><span class="p">,</span> <span class="nx">length</span><span class="p">,</span> <span class="nx">argument</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1349'>			<span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="nx">argument</span> <span class="o">&lt;</span> <span class="mi">0</span> <span class="o">?</span> <span class="nx">argument</span> <span class="o">+</span> <span class="nx">length</span> <span class="o">:</span> <span class="nx">argument</span><span class="p">;</span></div><div class='line' id='LC1350'>			<span class="k">for</span> <span class="p">(</span> <span class="p">;</span> <span class="o">++</span><span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">length</span><span class="p">;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1351'>				<span class="nx">matchIndexes</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">i</span> <span class="p">);</span></div><div class='line' id='LC1352'>			<span class="p">}</span></div><div class='line' id='LC1353'>			<span class="k">return</span> <span class="nx">matchIndexes</span><span class="p">;</span></div><div class='line' id='LC1354'>		<span class="p">})</span></div><div class='line' id='LC1355'>	<span class="p">}</span></div><div class='line' id='LC1356'><span class="p">};</span></div><div class='line' id='LC1357'><br/></div><div class='line' id='LC1358'><span class="c1">// Add button/input type pseudos</span></div><div class='line' id='LC1359'><span class="k">for</span> <span class="p">(</span> <span class="nx">i</span> <span class="k">in</span> <span class="p">{</span> <span class="nx">radio</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span> <span class="nx">checkbox</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span> <span class="nx">file</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span> <span class="nx">password</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span> <span class="nx">image</span><span class="o">:</span> <span class="kc">true</span> <span class="p">}</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1360'>	<span class="nx">Expr</span><span class="p">.</span><span class="nx">pseudos</span><span class="p">[</span> <span class="nx">i</span> <span class="p">]</span> <span class="o">=</span> <span class="nx">createInputPseudo</span><span class="p">(</span> <span class="nx">i</span> <span class="p">);</span></div><div class='line' id='LC1361'><span class="p">}</span></div><div class='line' id='LC1362'><span class="k">for</span> <span class="p">(</span> <span class="nx">i</span> <span class="k">in</span> <span class="p">{</span> <span class="nx">submit</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span> <span class="nx">reset</span><span class="o">:</span> <span class="kc">true</span> <span class="p">}</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1363'>	<span class="nx">Expr</span><span class="p">.</span><span class="nx">pseudos</span><span class="p">[</span> <span class="nx">i</span> <span class="p">]</span> <span class="o">=</span> <span class="nx">createButtonPseudo</span><span class="p">(</span> <span class="nx">i</span> <span class="p">);</span></div><div class='line' id='LC1364'><span class="p">}</span></div><div class='line' id='LC1365'><br/></div><div class='line' id='LC1366'><span class="kd">function</span> <span class="nx">tokenize</span><span class="p">(</span> <span class="nx">selector</span><span class="p">,</span> <span class="nx">parseOnly</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1367'>	<span class="kd">var</span> <span class="nx">matched</span><span class="p">,</span> <span class="nx">match</span><span class="p">,</span> <span class="nx">tokens</span><span class="p">,</span> <span class="nx">type</span><span class="p">,</span></div><div class='line' id='LC1368'>		<span class="nx">soFar</span><span class="p">,</span> <span class="nx">groups</span><span class="p">,</span> <span class="nx">preFilters</span><span class="p">,</span></div><div class='line' id='LC1369'>		<span class="nx">cached</span> <span class="o">=</span> <span class="nx">tokenCache</span><span class="p">[</span> <span class="nx">selector</span> <span class="o">+</span> <span class="s2">&quot; &quot;</span> <span class="p">];</span></div><div class='line' id='LC1370'><br/></div><div class='line' id='LC1371'>	<span class="k">if</span> <span class="p">(</span> <span class="nx">cached</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1372'>		<span class="k">return</span> <span class="nx">parseOnly</span> <span class="o">?</span> <span class="mi">0</span> <span class="o">:</span> <span class="nx">cached</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span> <span class="mi">0</span> <span class="p">);</span></div><div class='line' id='LC1373'>	<span class="p">}</span></div><div class='line' id='LC1374'><br/></div><div class='line' id='LC1375'>	<span class="nx">soFar</span> <span class="o">=</span> <span class="nx">selector</span><span class="p">;</span></div><div class='line' id='LC1376'>	<span class="nx">groups</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC1377'>	<span class="nx">preFilters</span> <span class="o">=</span> <span class="nx">Expr</span><span class="p">.</span><span class="nx">preFilter</span><span class="p">;</span></div><div class='line' id='LC1378'><br/></div><div class='line' id='LC1379'>	<span class="k">while</span> <span class="p">(</span> <span class="nx">soFar</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1380'><br/></div><div class='line' id='LC1381'>		<span class="c1">// Comma and first run</span></div><div class='line' id='LC1382'>		<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">matched</span> <span class="o">||</span> <span class="p">(</span><span class="nx">match</span> <span class="o">=</span> <span class="nx">rcomma</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span> <span class="nx">soFar</span> <span class="p">))</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1383'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">match</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1384'>				<span class="c1">// Don&#39;t consume trailing commas as valid</span></div><div class='line' id='LC1385'>				<span class="nx">soFar</span> <span class="o">=</span> <span class="nx">soFar</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span> <span class="nx">match</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span> <span class="p">)</span> <span class="o">||</span> <span class="nx">soFar</span><span class="p">;</span></div><div class='line' id='LC1386'>			<span class="p">}</span></div><div class='line' id='LC1387'>			<span class="nx">groups</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">tokens</span> <span class="o">=</span> <span class="p">[]</span> <span class="p">);</span></div><div class='line' id='LC1388'>		<span class="p">}</span></div><div class='line' id='LC1389'><br/></div><div class='line' id='LC1390'>		<span class="nx">matched</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1391'><br/></div><div class='line' id='LC1392'>		<span class="c1">// Combinators</span></div><div class='line' id='LC1393'>		<span class="k">if</span> <span class="p">(</span> <span class="p">(</span><span class="nx">match</span> <span class="o">=</span> <span class="nx">rcombinators</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span> <span class="nx">soFar</span> <span class="p">))</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1394'>			<span class="nx">matched</span> <span class="o">=</span> <span class="nx">match</span><span class="p">.</span><span class="nx">shift</span><span class="p">();</span></div><div class='line' id='LC1395'>			<span class="nx">tokens</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="p">{</span></div><div class='line' id='LC1396'>				<span class="nx">value</span><span class="o">:</span> <span class="nx">matched</span><span class="p">,</span></div><div class='line' id='LC1397'>				<span class="c1">// Cast descendant combinators to space</span></div><div class='line' id='LC1398'>				<span class="nx">type</span><span class="o">:</span> <span class="nx">match</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">replace</span><span class="p">(</span> <span class="nx">rtrim</span><span class="p">,</span> <span class="s2">&quot; &quot;</span> <span class="p">)</span></div><div class='line' id='LC1399'>			<span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC1400'>			<span class="nx">soFar</span> <span class="o">=</span> <span class="nx">soFar</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span> <span class="nx">matched</span><span class="p">.</span><span class="nx">length</span> <span class="p">);</span></div><div class='line' id='LC1401'>		<span class="p">}</span></div><div class='line' id='LC1402'><br/></div><div class='line' id='LC1403'>		<span class="c1">// Filters</span></div><div class='line' id='LC1404'>		<span class="k">for</span> <span class="p">(</span> <span class="nx">type</span> <span class="k">in</span> <span class="nx">Expr</span><span class="p">.</span><span class="nx">filter</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1405'>			<span class="k">if</span> <span class="p">(</span> <span class="p">(</span><span class="nx">match</span> <span class="o">=</span> <span class="nx">matchExpr</span><span class="p">[</span> <span class="nx">type</span> <span class="p">].</span><span class="nx">exec</span><span class="p">(</span> <span class="nx">soFar</span> <span class="p">))</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="o">!</span><span class="nx">preFilters</span><span class="p">[</span> <span class="nx">type</span> <span class="p">]</span> <span class="o">||</span></div><div class='line' id='LC1406'>				<span class="p">(</span><span class="nx">match</span> <span class="o">=</span> <span class="nx">preFilters</span><span class="p">[</span> <span class="nx">type</span> <span class="p">](</span> <span class="nx">match</span> <span class="p">)))</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1407'>				<span class="nx">matched</span> <span class="o">=</span> <span class="nx">match</span><span class="p">.</span><span class="nx">shift</span><span class="p">();</span></div><div class='line' id='LC1408'>				<span class="nx">tokens</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="p">{</span></div><div class='line' id='LC1409'>					<span class="nx">value</span><span class="o">:</span> <span class="nx">matched</span><span class="p">,</span></div><div class='line' id='LC1410'>					<span class="nx">type</span><span class="o">:</span> <span class="nx">type</span><span class="p">,</span></div><div class='line' id='LC1411'>					<span class="nx">matches</span><span class="o">:</span> <span class="nx">match</span></div><div class='line' id='LC1412'>				<span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC1413'>				<span class="nx">soFar</span> <span class="o">=</span> <span class="nx">soFar</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span> <span class="nx">matched</span><span class="p">.</span><span class="nx">length</span> <span class="p">);</span></div><div class='line' id='LC1414'>			<span class="p">}</span></div><div class='line' id='LC1415'>		<span class="p">}</span></div><div class='line' id='LC1416'><br/></div><div class='line' id='LC1417'>		<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">matched</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1418'>			<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC1419'>		<span class="p">}</span></div><div class='line' id='LC1420'>	<span class="p">}</span></div><div class='line' id='LC1421'><br/></div><div class='line' id='LC1422'>	<span class="c1">// Return the length of the invalid excess</span></div><div class='line' id='LC1423'>	<span class="c1">// if we&#39;re just parsing</span></div><div class='line' id='LC1424'>	<span class="c1">// Otherwise, throw an error or return tokens</span></div><div class='line' id='LC1425'>	<span class="k">return</span> <span class="nx">parseOnly</span> <span class="o">?</span></div><div class='line' id='LC1426'>		<span class="nx">soFar</span><span class="p">.</span><span class="nx">length</span> <span class="o">:</span></div><div class='line' id='LC1427'>		<span class="nx">soFar</span> <span class="o">?</span></div><div class='line' id='LC1428'>			<span class="nx">Sizzle</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span> <span class="nx">selector</span> <span class="p">)</span> <span class="o">:</span></div><div class='line' id='LC1429'>			<span class="c1">// Cache the tokens</span></div><div class='line' id='LC1430'>			<span class="nx">tokenCache</span><span class="p">(</span> <span class="nx">selector</span><span class="p">,</span> <span class="nx">groups</span> <span class="p">).</span><span class="nx">slice</span><span class="p">(</span> <span class="mi">0</span> <span class="p">);</span></div><div class='line' id='LC1431'><span class="p">}</span></div><div class='line' id='LC1432'><br/></div><div class='line' id='LC1433'><span class="kd">function</span> <span class="nx">toSelector</span><span class="p">(</span> <span class="nx">tokens</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1434'>	<span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC1435'>		<span class="nx">len</span> <span class="o">=</span> <span class="nx">tokens</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span></div><div class='line' id='LC1436'>		<span class="nx">selector</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></div><div class='line' id='LC1437'>	<span class="k">for</span> <span class="p">(</span> <span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1438'>		<span class="nx">selector</span> <span class="o">+=</span> <span class="nx">tokens</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC1439'>	<span class="p">}</span></div><div class='line' id='LC1440'>	<span class="k">return</span> <span class="nx">selector</span><span class="p">;</span></div><div class='line' id='LC1441'><span class="p">}</span></div><div class='line' id='LC1442'><br/></div><div class='line' id='LC1443'><span class="kd">function</span> <span class="nx">addCombinator</span><span class="p">(</span> <span class="nx">matcher</span><span class="p">,</span> <span class="nx">combinator</span><span class="p">,</span> <span class="nx">base</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1444'>	<span class="kd">var</span> <span class="nx">dir</span> <span class="o">=</span> <span class="nx">combinator</span><span class="p">.</span><span class="nx">dir</span><span class="p">,</span></div><div class='line' id='LC1445'>		<span class="nx">checkNonElements</span> <span class="o">=</span> <span class="nx">base</span> <span class="o">&amp;&amp;</span> <span class="nx">dir</span> <span class="o">===</span> <span class="s2">&quot;parentNode&quot;</span><span class="p">,</span></div><div class='line' id='LC1446'>		<span class="nx">doneName</span> <span class="o">=</span> <span class="nx">done</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC1447'><br/></div><div class='line' id='LC1448'>	<span class="k">return</span> <span class="nx">combinator</span><span class="p">.</span><span class="nx">first</span> <span class="o">?</span></div><div class='line' id='LC1449'>		<span class="c1">// Check against closest ancestor/preceding element</span></div><div class='line' id='LC1450'>		<span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span><span class="p">,</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">xml</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1451'>			<span class="k">while</span> <span class="p">(</span> <span class="p">(</span><span class="nx">elem</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">[</span> <span class="nx">dir</span> <span class="p">])</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1452'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">1</span> <span class="o">||</span> <span class="nx">checkNonElements</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1453'>					<span class="k">return</span> <span class="nx">matcher</span><span class="p">(</span> <span class="nx">elem</span><span class="p">,</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">xml</span> <span class="p">);</span></div><div class='line' id='LC1454'>				<span class="p">}</span></div><div class='line' id='LC1455'>			<span class="p">}</span></div><div class='line' id='LC1456'>		<span class="p">}</span> <span class="o">:</span></div><div class='line' id='LC1457'><br/></div><div class='line' id='LC1458'>		<span class="c1">// Check against all ancestor/preceding elements</span></div><div class='line' id='LC1459'>		<span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span><span class="p">,</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">xml</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1460'>			<span class="kd">var</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">cache</span><span class="p">,</span> <span class="nx">outerCache</span><span class="p">,</span></div><div class='line' id='LC1461'>				<span class="nx">dirkey</span> <span class="o">=</span> <span class="nx">dirruns</span> <span class="o">+</span> <span class="s2">&quot; &quot;</span> <span class="o">+</span> <span class="nx">doneName</span><span class="p">;</span></div><div class='line' id='LC1462'><br/></div><div class='line' id='LC1463'>			<span class="c1">// We can&#39;t set arbitrary data on XML nodes, so they don&#39;t benefit from dir caching</span></div><div class='line' id='LC1464'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">xml</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1465'>				<span class="k">while</span> <span class="p">(</span> <span class="p">(</span><span class="nx">elem</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">[</span> <span class="nx">dir</span> <span class="p">])</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1466'>					<span class="k">if</span> <span class="p">(</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">1</span> <span class="o">||</span> <span class="nx">checkNonElements</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1467'>						<span class="k">if</span> <span class="p">(</span> <span class="nx">matcher</span><span class="p">(</span> <span class="nx">elem</span><span class="p">,</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">xml</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1468'>							<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1469'>						<span class="p">}</span></div><div class='line' id='LC1470'>					<span class="p">}</span></div><div class='line' id='LC1471'>				<span class="p">}</span></div><div class='line' id='LC1472'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1473'>				<span class="k">while</span> <span class="p">(</span> <span class="p">(</span><span class="nx">elem</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">[</span> <span class="nx">dir</span> <span class="p">])</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1474'>					<span class="k">if</span> <span class="p">(</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">1</span> <span class="o">||</span> <span class="nx">checkNonElements</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1475'>						<span class="nx">outerCache</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">[</span> <span class="nx">expando</span> <span class="p">]</span> <span class="o">||</span> <span class="p">(</span><span class="nx">elem</span><span class="p">[</span> <span class="nx">expando</span> <span class="p">]</span> <span class="o">=</span> <span class="p">{});</span></div><div class='line' id='LC1476'>						<span class="k">if</span> <span class="p">(</span> <span class="p">(</span><span class="nx">cache</span> <span class="o">=</span> <span class="nx">outerCache</span><span class="p">[</span> <span class="nx">dir</span> <span class="p">])</span> <span class="o">&amp;&amp;</span> <span class="nx">cache</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">===</span> <span class="nx">dirkey</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1477'>							<span class="k">if</span> <span class="p">(</span> <span class="p">(</span><span class="nx">data</span> <span class="o">=</span> <span class="nx">cache</span><span class="p">[</span><span class="mi">1</span><span class="p">])</span> <span class="o">===</span> <span class="kc">true</span> <span class="o">||</span> <span class="nx">data</span> <span class="o">===</span> <span class="nx">cachedruns</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1478'>								<span class="k">return</span> <span class="nx">data</span> <span class="o">===</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1479'>							<span class="p">}</span></div><div class='line' id='LC1480'>						<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1481'>							<span class="nx">cache</span> <span class="o">=</span> <span class="nx">outerCache</span><span class="p">[</span> <span class="nx">dir</span> <span class="p">]</span> <span class="o">=</span> <span class="p">[</span> <span class="nx">dirkey</span> <span class="p">];</span></div><div class='line' id='LC1482'>							<span class="nx">cache</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="nx">matcher</span><span class="p">(</span> <span class="nx">elem</span><span class="p">,</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">xml</span> <span class="p">)</span> <span class="o">||</span> <span class="nx">cachedruns</span><span class="p">;</span></div><div class='line' id='LC1483'>							<span class="k">if</span> <span class="p">(</span> <span class="nx">cache</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">===</span> <span class="kc">true</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1484'>								<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1485'>							<span class="p">}</span></div><div class='line' id='LC1486'>						<span class="p">}</span></div><div class='line' id='LC1487'>					<span class="p">}</span></div><div class='line' id='LC1488'>				<span class="p">}</span></div><div class='line' id='LC1489'>			<span class="p">}</span></div><div class='line' id='LC1490'>		<span class="p">};</span></div><div class='line' id='LC1491'><span class="p">}</span></div><div class='line' id='LC1492'><br/></div><div class='line' id='LC1493'><span class="kd">function</span> <span class="nx">elementMatcher</span><span class="p">(</span> <span class="nx">matchers</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1494'>	<span class="k">return</span> <span class="nx">matchers</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">1</span> <span class="o">?</span></div><div class='line' id='LC1495'>		<span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span><span class="p">,</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">xml</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1496'>			<span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="nx">matchers</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC1497'>			<span class="k">while</span> <span class="p">(</span> <span class="nx">i</span><span class="o">--</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1498'>				<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">matchers</span><span class="p">[</span><span class="nx">i</span><span class="p">](</span> <span class="nx">elem</span><span class="p">,</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">xml</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1499'>					<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1500'>				<span class="p">}</span></div><div class='line' id='LC1501'>			<span class="p">}</span></div><div class='line' id='LC1502'>			<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1503'>		<span class="p">}</span> <span class="o">:</span></div><div class='line' id='LC1504'>		<span class="nx">matchers</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC1505'><span class="p">}</span></div><div class='line' id='LC1506'><br/></div><div class='line' id='LC1507'><span class="kd">function</span> <span class="nx">condense</span><span class="p">(</span> <span class="nx">unmatched</span><span class="p">,</span> <span class="nx">map</span><span class="p">,</span> <span class="nx">filter</span><span class="p">,</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">xml</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1508'>	<span class="kd">var</span> <span class="nx">elem</span><span class="p">,</span></div><div class='line' id='LC1509'>		<span class="nx">newUnmatched</span> <span class="o">=</span> <span class="p">[],</span></div><div class='line' id='LC1510'>		<span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC1511'>		<span class="nx">len</span> <span class="o">=</span> <span class="nx">unmatched</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span></div><div class='line' id='LC1512'>		<span class="nx">mapped</span> <span class="o">=</span> <span class="nx">map</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC1513'><br/></div><div class='line' id='LC1514'>	<span class="k">for</span> <span class="p">(</span> <span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1515'>		<span class="k">if</span> <span class="p">(</span> <span class="p">(</span><span class="nx">elem</span> <span class="o">=</span> <span class="nx">unmatched</span><span class="p">[</span><span class="nx">i</span><span class="p">])</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1516'>			<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">filter</span> <span class="o">||</span> <span class="nx">filter</span><span class="p">(</span> <span class="nx">elem</span><span class="p">,</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">xml</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1517'>				<span class="nx">newUnmatched</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">);</span></div><div class='line' id='LC1518'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">mapped</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1519'>					<span class="nx">map</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">i</span> <span class="p">);</span></div><div class='line' id='LC1520'>				<span class="p">}</span></div><div class='line' id='LC1521'>			<span class="p">}</span></div><div class='line' id='LC1522'>		<span class="p">}</span></div><div class='line' id='LC1523'>	<span class="p">}</span></div><div class='line' id='LC1524'><br/></div><div class='line' id='LC1525'>	<span class="k">return</span> <span class="nx">newUnmatched</span><span class="p">;</span></div><div class='line' id='LC1526'><span class="p">}</span></div><div class='line' id='LC1527'><br/></div><div class='line' id='LC1528'><span class="kd">function</span> <span class="nx">setMatcher</span><span class="p">(</span> <span class="nx">preFilter</span><span class="p">,</span> <span class="nx">selector</span><span class="p">,</span> <span class="nx">matcher</span><span class="p">,</span> <span class="nx">postFilter</span><span class="p">,</span> <span class="nx">postFinder</span><span class="p">,</span> <span class="nx">postSelector</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1529'>	<span class="k">if</span> <span class="p">(</span> <span class="nx">postFilter</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">postFilter</span><span class="p">[</span> <span class="nx">expando</span> <span class="p">]</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1530'>		<span class="nx">postFilter</span> <span class="o">=</span> <span class="nx">setMatcher</span><span class="p">(</span> <span class="nx">postFilter</span> <span class="p">);</span></div><div class='line' id='LC1531'>	<span class="p">}</span></div><div class='line' id='LC1532'>	<span class="k">if</span> <span class="p">(</span> <span class="nx">postFinder</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">postFinder</span><span class="p">[</span> <span class="nx">expando</span> <span class="p">]</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1533'>		<span class="nx">postFinder</span> <span class="o">=</span> <span class="nx">setMatcher</span><span class="p">(</span> <span class="nx">postFinder</span><span class="p">,</span> <span class="nx">postSelector</span> <span class="p">);</span></div><div class='line' id='LC1534'>	<span class="p">}</span></div><div class='line' id='LC1535'>	<span class="k">return</span> <span class="nx">markFunction</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">seed</span><span class="p">,</span> <span class="nx">results</span><span class="p">,</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">xml</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1536'>		<span class="kd">var</span> <span class="nx">temp</span><span class="p">,</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">elem</span><span class="p">,</span></div><div class='line' id='LC1537'>			<span class="nx">preMap</span> <span class="o">=</span> <span class="p">[],</span></div><div class='line' id='LC1538'>			<span class="nx">postMap</span> <span class="o">=</span> <span class="p">[],</span></div><div class='line' id='LC1539'>			<span class="nx">preexisting</span> <span class="o">=</span> <span class="nx">results</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span></div><div class='line' id='LC1540'><br/></div><div class='line' id='LC1541'>			<span class="c1">// Get initial elements from seed or context</span></div><div class='line' id='LC1542'>			<span class="nx">elems</span> <span class="o">=</span> <span class="nx">seed</span> <span class="o">||</span> <span class="nx">multipleContexts</span><span class="p">(</span> <span class="nx">selector</span> <span class="o">||</span> <span class="s2">&quot;*&quot;</span><span class="p">,</span> <span class="nx">context</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">?</span> <span class="p">[</span> <span class="nx">context</span> <span class="p">]</span> <span class="o">:</span> <span class="nx">context</span><span class="p">,</span> <span class="p">[]</span> <span class="p">),</span></div><div class='line' id='LC1543'><br/></div><div class='line' id='LC1544'>			<span class="c1">// Prefilter to get matcher input, preserving a map for seed-results synchronization</span></div><div class='line' id='LC1545'>			<span class="nx">matcherIn</span> <span class="o">=</span> <span class="nx">preFilter</span> <span class="o">&amp;&amp;</span> <span class="p">(</span> <span class="nx">seed</span> <span class="o">||</span> <span class="o">!</span><span class="nx">selector</span> <span class="p">)</span> <span class="o">?</span></div><div class='line' id='LC1546'>				<span class="nx">condense</span><span class="p">(</span> <span class="nx">elems</span><span class="p">,</span> <span class="nx">preMap</span><span class="p">,</span> <span class="nx">preFilter</span><span class="p">,</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">xml</span> <span class="p">)</span> <span class="o">:</span></div><div class='line' id='LC1547'>				<span class="nx">elems</span><span class="p">,</span></div><div class='line' id='LC1548'><br/></div><div class='line' id='LC1549'>			<span class="nx">matcherOut</span> <span class="o">=</span> <span class="nx">matcher</span> <span class="o">?</span></div><div class='line' id='LC1550'>				<span class="c1">// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,</span></div><div class='line' id='LC1551'>				<span class="nx">postFinder</span> <span class="o">||</span> <span class="p">(</span> <span class="nx">seed</span> <span class="o">?</span> <span class="nx">preFilter</span> <span class="o">:</span> <span class="nx">preexisting</span> <span class="o">||</span> <span class="nx">postFilter</span> <span class="p">)</span> <span class="o">?</span></div><div class='line' id='LC1552'><br/></div><div class='line' id='LC1553'>					<span class="c1">// ...intermediate processing is necessary</span></div><div class='line' id='LC1554'>					<span class="p">[]</span> <span class="o">:</span></div><div class='line' id='LC1555'><br/></div><div class='line' id='LC1556'>					<span class="c1">// ...otherwise use results directly</span></div><div class='line' id='LC1557'>					<span class="nx">results</span> <span class="o">:</span></div><div class='line' id='LC1558'>				<span class="nx">matcherIn</span><span class="p">;</span></div><div class='line' id='LC1559'><br/></div><div class='line' id='LC1560'>		<span class="c1">// Find primary matches</span></div><div class='line' id='LC1561'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">matcher</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1562'>			<span class="nx">matcher</span><span class="p">(</span> <span class="nx">matcherIn</span><span class="p">,</span> <span class="nx">matcherOut</span><span class="p">,</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">xml</span> <span class="p">);</span></div><div class='line' id='LC1563'>		<span class="p">}</span></div><div class='line' id='LC1564'><br/></div><div class='line' id='LC1565'>		<span class="c1">// Apply postFilter</span></div><div class='line' id='LC1566'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">postFilter</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1567'>			<span class="nx">temp</span> <span class="o">=</span> <span class="nx">condense</span><span class="p">(</span> <span class="nx">matcherOut</span><span class="p">,</span> <span class="nx">postMap</span> <span class="p">);</span></div><div class='line' id='LC1568'>			<span class="nx">postFilter</span><span class="p">(</span> <span class="nx">temp</span><span class="p">,</span> <span class="p">[],</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">xml</span> <span class="p">);</span></div><div class='line' id='LC1569'><br/></div><div class='line' id='LC1570'>			<span class="c1">// Un-match failing elements by moving them back to matcherIn</span></div><div class='line' id='LC1571'>			<span class="nx">i</span> <span class="o">=</span> <span class="nx">temp</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC1572'>			<span class="k">while</span> <span class="p">(</span> <span class="nx">i</span><span class="o">--</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1573'>				<span class="k">if</span> <span class="p">(</span> <span class="p">(</span><span class="nx">elem</span> <span class="o">=</span> <span class="nx">temp</span><span class="p">[</span><span class="nx">i</span><span class="p">])</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1574'>					<span class="nx">matcherOut</span><span class="p">[</span> <span class="nx">postMap</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="p">]</span> <span class="o">=</span> <span class="o">!</span><span class="p">(</span><span class="nx">matcherIn</span><span class="p">[</span> <span class="nx">postMap</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="p">]</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">);</span></div><div class='line' id='LC1575'>				<span class="p">}</span></div><div class='line' id='LC1576'>			<span class="p">}</span></div><div class='line' id='LC1577'>		<span class="p">}</span></div><div class='line' id='LC1578'><br/></div><div class='line' id='LC1579'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">seed</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1580'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">postFinder</span> <span class="o">||</span> <span class="nx">preFilter</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1581'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">postFinder</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1582'>					<span class="c1">// Get the final matcherOut by condensing this intermediate into postFinder contexts</span></div><div class='line' id='LC1583'>					<span class="nx">temp</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC1584'>					<span class="nx">i</span> <span class="o">=</span> <span class="nx">matcherOut</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC1585'>					<span class="k">while</span> <span class="p">(</span> <span class="nx">i</span><span class="o">--</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1586'>						<span class="k">if</span> <span class="p">(</span> <span class="p">(</span><span class="nx">elem</span> <span class="o">=</span> <span class="nx">matcherOut</span><span class="p">[</span><span class="nx">i</span><span class="p">])</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1587'>							<span class="c1">// Restore matcherIn since elem is not yet a final match</span></div><div class='line' id='LC1588'>							<span class="nx">temp</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="p">(</span><span class="nx">matcherIn</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC1589'>						<span class="p">}</span></div><div class='line' id='LC1590'>					<span class="p">}</span></div><div class='line' id='LC1591'>					<span class="nx">postFinder</span><span class="p">(</span> <span class="kc">null</span><span class="p">,</span> <span class="p">(</span><span class="nx">matcherOut</span> <span class="o">=</span> <span class="p">[]),</span> <span class="nx">temp</span><span class="p">,</span> <span class="nx">xml</span> <span class="p">);</span></div><div class='line' id='LC1592'>				<span class="p">}</span></div><div class='line' id='LC1593'><br/></div><div class='line' id='LC1594'>				<span class="c1">// Move matched elements from seed to results to keep them synchronized</span></div><div class='line' id='LC1595'>				<span class="nx">i</span> <span class="o">=</span> <span class="nx">matcherOut</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC1596'>				<span class="k">while</span> <span class="p">(</span> <span class="nx">i</span><span class="o">--</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1597'>					<span class="k">if</span> <span class="p">(</span> <span class="p">(</span><span class="nx">elem</span> <span class="o">=</span> <span class="nx">matcherOut</span><span class="p">[</span><span class="nx">i</span><span class="p">])</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC1598'>						<span class="p">(</span><span class="nx">temp</span> <span class="o">=</span> <span class="nx">postFinder</span> <span class="o">?</span> <span class="nx">indexOf</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span> <span class="nx">seed</span><span class="p">,</span> <span class="nx">elem</span> <span class="p">)</span> <span class="o">:</span> <span class="nx">preMap</span><span class="p">[</span><span class="nx">i</span><span class="p">])</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1599'><br/></div><div class='line' id='LC1600'>						<span class="nx">seed</span><span class="p">[</span><span class="nx">temp</span><span class="p">]</span> <span class="o">=</span> <span class="o">!</span><span class="p">(</span><span class="nx">results</span><span class="p">[</span><span class="nx">temp</span><span class="p">]</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">);</span></div><div class='line' id='LC1601'>					<span class="p">}</span></div><div class='line' id='LC1602'>				<span class="p">}</span></div><div class='line' id='LC1603'>			<span class="p">}</span></div><div class='line' id='LC1604'><br/></div><div class='line' id='LC1605'>		<span class="c1">// Add elements to results, through postFinder if defined</span></div><div class='line' id='LC1606'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1607'>			<span class="nx">matcherOut</span> <span class="o">=</span> <span class="nx">condense</span><span class="p">(</span></div><div class='line' id='LC1608'>				<span class="nx">matcherOut</span> <span class="o">===</span> <span class="nx">results</span> <span class="o">?</span></div><div class='line' id='LC1609'>					<span class="nx">matcherOut</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span> <span class="nx">preexisting</span><span class="p">,</span> <span class="nx">matcherOut</span><span class="p">.</span><span class="nx">length</span> <span class="p">)</span> <span class="o">:</span></div><div class='line' id='LC1610'>					<span class="nx">matcherOut</span></div><div class='line' id='LC1611'>			<span class="p">);</span></div><div class='line' id='LC1612'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">postFinder</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1613'>				<span class="nx">postFinder</span><span class="p">(</span> <span class="kc">null</span><span class="p">,</span> <span class="nx">results</span><span class="p">,</span> <span class="nx">matcherOut</span><span class="p">,</span> <span class="nx">xml</span> <span class="p">);</span></div><div class='line' id='LC1614'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1615'>				<span class="nx">push</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span> <span class="nx">results</span><span class="p">,</span> <span class="nx">matcherOut</span> <span class="p">);</span></div><div class='line' id='LC1616'>			<span class="p">}</span></div><div class='line' id='LC1617'>		<span class="p">}</span></div><div class='line' id='LC1618'>	<span class="p">});</span></div><div class='line' id='LC1619'><span class="p">}</span></div><div class='line' id='LC1620'><br/></div><div class='line' id='LC1621'><span class="kd">function</span> <span class="nx">matcherFromTokens</span><span class="p">(</span> <span class="nx">tokens</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1622'>	<span class="kd">var</span> <span class="nx">checkContext</span><span class="p">,</span> <span class="nx">matcher</span><span class="p">,</span> <span class="nx">j</span><span class="p">,</span></div><div class='line' id='LC1623'>		<span class="nx">len</span> <span class="o">=</span> <span class="nx">tokens</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span></div><div class='line' id='LC1624'>		<span class="nx">leadingRelative</span> <span class="o">=</span> <span class="nx">Expr</span><span class="p">.</span><span class="nx">relative</span><span class="p">[</span> <span class="nx">tokens</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">type</span> <span class="p">],</span></div><div class='line' id='LC1625'>		<span class="nx">implicitRelative</span> <span class="o">=</span> <span class="nx">leadingRelative</span> <span class="o">||</span> <span class="nx">Expr</span><span class="p">.</span><span class="nx">relative</span><span class="p">[</span><span class="s2">&quot; &quot;</span><span class="p">],</span></div><div class='line' id='LC1626'>		<span class="nx">i</span> <span class="o">=</span> <span class="nx">leadingRelative</span> <span class="o">?</span> <span class="mi">1</span> <span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC1627'><br/></div><div class='line' id='LC1628'>		<span class="c1">// The foundational matcher ensures that elements are reachable from top-level context(s)</span></div><div class='line' id='LC1629'>		<span class="nx">matchContext</span> <span class="o">=</span> <span class="nx">addCombinator</span><span class="p">(</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1630'>			<span class="k">return</span> <span class="nx">elem</span> <span class="o">===</span> <span class="nx">checkContext</span><span class="p">;</span></div><div class='line' id='LC1631'>		<span class="p">},</span> <span class="nx">implicitRelative</span><span class="p">,</span> <span class="kc">true</span> <span class="p">),</span></div><div class='line' id='LC1632'>		<span class="nx">matchAnyContext</span> <span class="o">=</span> <span class="nx">addCombinator</span><span class="p">(</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1633'>			<span class="k">return</span> <span class="nx">indexOf</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span> <span class="nx">checkContext</span><span class="p">,</span> <span class="nx">elem</span> <span class="p">)</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC1634'>		<span class="p">},</span> <span class="nx">implicitRelative</span><span class="p">,</span> <span class="kc">true</span> <span class="p">),</span></div><div class='line' id='LC1635'>		<span class="nx">matchers</span> <span class="o">=</span> <span class="p">[</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span><span class="p">,</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">xml</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1636'>			<span class="k">return</span> <span class="p">(</span> <span class="o">!</span><span class="nx">leadingRelative</span> <span class="o">&amp;&amp;</span> <span class="p">(</span> <span class="nx">xml</span> <span class="o">||</span> <span class="nx">context</span> <span class="o">!==</span> <span class="nx">outermostContext</span> <span class="p">)</span> <span class="p">)</span> <span class="o">||</span> <span class="p">(</span></div><div class='line' id='LC1637'>				<span class="p">(</span><span class="nx">checkContext</span> <span class="o">=</span> <span class="nx">context</span><span class="p">).</span><span class="nx">nodeType</span> <span class="o">?</span></div><div class='line' id='LC1638'>					<span class="nx">matchContext</span><span class="p">(</span> <span class="nx">elem</span><span class="p">,</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">xml</span> <span class="p">)</span> <span class="o">:</span></div><div class='line' id='LC1639'>					<span class="nx">matchAnyContext</span><span class="p">(</span> <span class="nx">elem</span><span class="p">,</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">xml</span> <span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC1640'>		<span class="p">}</span> <span class="p">];</span></div><div class='line' id='LC1641'><br/></div><div class='line' id='LC1642'>	<span class="k">for</span> <span class="p">(</span> <span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1643'>		<span class="k">if</span> <span class="p">(</span> <span class="p">(</span><span class="nx">matcher</span> <span class="o">=</span> <span class="nx">Expr</span><span class="p">.</span><span class="nx">relative</span><span class="p">[</span> <span class="nx">tokens</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">type</span> <span class="p">])</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1644'>			<span class="nx">matchers</span> <span class="o">=</span> <span class="p">[</span> <span class="nx">addCombinator</span><span class="p">(</span><span class="nx">elementMatcher</span><span class="p">(</span> <span class="nx">matchers</span> <span class="p">),</span> <span class="nx">matcher</span><span class="p">)</span> <span class="p">];</span></div><div class='line' id='LC1645'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1646'>			<span class="nx">matcher</span> <span class="o">=</span> <span class="nx">Expr</span><span class="p">.</span><span class="nx">filter</span><span class="p">[</span> <span class="nx">tokens</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">type</span> <span class="p">].</span><span class="nx">apply</span><span class="p">(</span> <span class="kc">null</span><span class="p">,</span> <span class="nx">tokens</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">matches</span> <span class="p">);</span></div><div class='line' id='LC1647'><br/></div><div class='line' id='LC1648'>			<span class="c1">// Return special upon seeing a positional matcher</span></div><div class='line' id='LC1649'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">matcher</span><span class="p">[</span> <span class="nx">expando</span> <span class="p">]</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1650'>				<span class="c1">// Find the next relative operator (if any) for proper handling</span></div><div class='line' id='LC1651'>				<span class="nx">j</span> <span class="o">=</span> <span class="o">++</span><span class="nx">i</span><span class="p">;</span></div><div class='line' id='LC1652'>				<span class="k">for</span> <span class="p">(</span> <span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">;</span> <span class="nx">j</span><span class="o">++</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1653'>					<span class="k">if</span> <span class="p">(</span> <span class="nx">Expr</span><span class="p">.</span><span class="nx">relative</span><span class="p">[</span> <span class="nx">tokens</span><span class="p">[</span><span class="nx">j</span><span class="p">].</span><span class="nx">type</span> <span class="p">]</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1654'>						<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC1655'>					<span class="p">}</span></div><div class='line' id='LC1656'>				<span class="p">}</span></div><div class='line' id='LC1657'>				<span class="k">return</span> <span class="nx">setMatcher</span><span class="p">(</span></div><div class='line' id='LC1658'>					<span class="nx">i</span> <span class="o">&gt;</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="nx">elementMatcher</span><span class="p">(</span> <span class="nx">matchers</span> <span class="p">),</span></div><div class='line' id='LC1659'>					<span class="nx">i</span> <span class="o">&gt;</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="nx">toSelector</span><span class="p">(</span> <span class="nx">tokens</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">i</span> <span class="o">-</span> <span class="mi">1</span> <span class="p">)</span> <span class="p">).</span><span class="nx">replace</span><span class="p">(</span> <span class="nx">rtrim</span><span class="p">,</span> <span class="s2">&quot;$1&quot;</span> <span class="p">),</span></div><div class='line' id='LC1660'>					<span class="nx">matcher</span><span class="p">,</span></div><div class='line' id='LC1661'>					<span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">j</span> <span class="o">&amp;&amp;</span> <span class="nx">matcherFromTokens</span><span class="p">(</span> <span class="nx">tokens</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">j</span> <span class="p">)</span> <span class="p">),</span></div><div class='line' id='LC1662'>					<span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">len</span> <span class="o">&amp;&amp;</span> <span class="nx">matcherFromTokens</span><span class="p">(</span> <span class="p">(</span><span class="nx">tokens</span> <span class="o">=</span> <span class="nx">tokens</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span> <span class="nx">j</span> <span class="p">))</span> <span class="p">),</span></div><div class='line' id='LC1663'>					<span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">len</span> <span class="o">&amp;&amp;</span> <span class="nx">toSelector</span><span class="p">(</span> <span class="nx">tokens</span> <span class="p">)</span></div><div class='line' id='LC1664'>				<span class="p">);</span></div><div class='line' id='LC1665'>			<span class="p">}</span></div><div class='line' id='LC1666'>			<span class="nx">matchers</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">matcher</span> <span class="p">);</span></div><div class='line' id='LC1667'>		<span class="p">}</span></div><div class='line' id='LC1668'>	<span class="p">}</span></div><div class='line' id='LC1669'><br/></div><div class='line' id='LC1670'>	<span class="k">return</span> <span class="nx">elementMatcher</span><span class="p">(</span> <span class="nx">matchers</span> <span class="p">);</span></div><div class='line' id='LC1671'><span class="p">}</span></div><div class='line' id='LC1672'><br/></div><div class='line' id='LC1673'><span class="kd">function</span> <span class="nx">matcherFromGroupMatchers</span><span class="p">(</span> <span class="nx">elementMatchers</span><span class="p">,</span> <span class="nx">setMatchers</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1674'>	<span class="c1">// A counter to specify which element is currently being matched</span></div><div class='line' id='LC1675'>	<span class="kd">var</span> <span class="nx">matcherCachedRuns</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC1676'>		<span class="nx">bySet</span> <span class="o">=</span> <span class="nx">setMatchers</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC1677'>		<span class="nx">byElement</span> <span class="o">=</span> <span class="nx">elementMatchers</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC1678'>		<span class="nx">superMatcher</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">seed</span><span class="p">,</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">xml</span><span class="p">,</span> <span class="nx">results</span><span class="p">,</span> <span class="nx">expandContext</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1679'>			<span class="kd">var</span> <span class="nx">elem</span><span class="p">,</span> <span class="nx">j</span><span class="p">,</span> <span class="nx">matcher</span><span class="p">,</span></div><div class='line' id='LC1680'>				<span class="nx">setMatched</span> <span class="o">=</span> <span class="p">[],</span></div><div class='line' id='LC1681'>				<span class="nx">matchedCount</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC1682'>				<span class="nx">i</span> <span class="o">=</span> <span class="s2">&quot;0&quot;</span><span class="p">,</span></div><div class='line' id='LC1683'>				<span class="nx">unmatched</span> <span class="o">=</span> <span class="nx">seed</span> <span class="o">&amp;&amp;</span> <span class="p">[],</span></div><div class='line' id='LC1684'>				<span class="nx">outermost</span> <span class="o">=</span> <span class="nx">expandContext</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC1685'>				<span class="nx">contextBackup</span> <span class="o">=</span> <span class="nx">outermostContext</span><span class="p">,</span></div><div class='line' id='LC1686'>				<span class="c1">// We must always have either seed elements or context</span></div><div class='line' id='LC1687'>				<span class="nx">elems</span> <span class="o">=</span> <span class="nx">seed</span> <span class="o">||</span> <span class="nx">byElement</span> <span class="o">&amp;&amp;</span> <span class="nx">Expr</span><span class="p">.</span><span class="nx">find</span><span class="p">[</span><span class="s2">&quot;TAG&quot;</span><span class="p">](</span> <span class="s2">&quot;*&quot;</span><span class="p">,</span> <span class="nx">expandContext</span> <span class="o">&amp;&amp;</span> <span class="nx">context</span><span class="p">.</span><span class="nx">parentNode</span> <span class="o">||</span> <span class="nx">context</span> <span class="p">),</span></div><div class='line' id='LC1688'>				<span class="c1">// Use integer dirruns iff this is the outermost matcher</span></div><div class='line' id='LC1689'>				<span class="nx">dirrunsUnique</span> <span class="o">=</span> <span class="p">(</span><span class="nx">dirruns</span> <span class="o">+=</span> <span class="nx">contextBackup</span> <span class="o">==</span> <span class="kc">null</span> <span class="o">?</span> <span class="mi">1</span> <span class="o">:</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">random</span><span class="p">()</span> <span class="o">||</span> <span class="mf">0.1</span><span class="p">);</span></div><div class='line' id='LC1690'><br/></div><div class='line' id='LC1691'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">outermost</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1692'>				<span class="nx">outermostContext</span> <span class="o">=</span> <span class="nx">context</span> <span class="o">!==</span> <span class="nb">document</span> <span class="o">&amp;&amp;</span> <span class="nx">context</span><span class="p">;</span></div><div class='line' id='LC1693'>				<span class="nx">cachedruns</span> <span class="o">=</span> <span class="nx">matcherCachedRuns</span><span class="p">;</span></div><div class='line' id='LC1694'>			<span class="p">}</span></div><div class='line' id='LC1695'><br/></div><div class='line' id='LC1696'>			<span class="c1">// Add elements passing elementMatchers directly to results</span></div><div class='line' id='LC1697'>			<span class="c1">// Keep `i` a string if there are no elements so `matchedCount` will be &quot;00&quot; below</span></div><div class='line' id='LC1698'>			<span class="k">for</span> <span class="p">(</span> <span class="p">;</span> <span class="p">(</span><span class="nx">elem</span> <span class="o">=</span> <span class="nx">elems</span><span class="p">[</span><span class="nx">i</span><span class="p">])</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1699'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">byElement</span> <span class="o">&amp;&amp;</span> <span class="nx">elem</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1700'>					<span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1701'>					<span class="k">while</span> <span class="p">(</span> <span class="p">(</span><span class="nx">matcher</span> <span class="o">=</span> <span class="nx">elementMatchers</span><span class="p">[</span><span class="nx">j</span><span class="o">++</span><span class="p">])</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1702'>						<span class="k">if</span> <span class="p">(</span> <span class="nx">matcher</span><span class="p">(</span> <span class="nx">elem</span><span class="p">,</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">xml</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1703'>							<span class="nx">results</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">);</span></div><div class='line' id='LC1704'>							<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC1705'>						<span class="p">}</span></div><div class='line' id='LC1706'>					<span class="p">}</span></div><div class='line' id='LC1707'>					<span class="k">if</span> <span class="p">(</span> <span class="nx">outermost</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1708'>						<span class="nx">dirruns</span> <span class="o">=</span> <span class="nx">dirrunsUnique</span><span class="p">;</span></div><div class='line' id='LC1709'>						<span class="nx">cachedruns</span> <span class="o">=</span> <span class="o">++</span><span class="nx">matcherCachedRuns</span><span class="p">;</span></div><div class='line' id='LC1710'>					<span class="p">}</span></div><div class='line' id='LC1711'>				<span class="p">}</span></div><div class='line' id='LC1712'><br/></div><div class='line' id='LC1713'>				<span class="c1">// Track unmatched elements for set filters</span></div><div class='line' id='LC1714'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">bySet</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1715'>					<span class="c1">// They will have gone through all possible matchers</span></div><div class='line' id='LC1716'>					<span class="k">if</span> <span class="p">(</span> <span class="p">(</span><span class="nx">elem</span> <span class="o">=</span> <span class="o">!</span><span class="nx">matcher</span> <span class="o">&amp;&amp;</span> <span class="nx">elem</span><span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1717'>						<span class="nx">matchedCount</span><span class="o">--</span><span class="p">;</span></div><div class='line' id='LC1718'>					<span class="p">}</span></div><div class='line' id='LC1719'><br/></div><div class='line' id='LC1720'>					<span class="c1">// Lengthen the array for every element, matched or not</span></div><div class='line' id='LC1721'>					<span class="k">if</span> <span class="p">(</span> <span class="nx">seed</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1722'>						<span class="nx">unmatched</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">elem</span> <span class="p">);</span></div><div class='line' id='LC1723'>					<span class="p">}</span></div><div class='line' id='LC1724'>				<span class="p">}</span></div><div class='line' id='LC1725'>			<span class="p">}</span></div><div class='line' id='LC1726'><br/></div><div class='line' id='LC1727'>			<span class="c1">// Apply set filters to unmatched elements</span></div><div class='line' id='LC1728'>			<span class="nx">matchedCount</span> <span class="o">+=</span> <span class="nx">i</span><span class="p">;</span></div><div class='line' id='LC1729'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">bySet</span> <span class="o">&amp;&amp;</span> <span class="nx">i</span> <span class="o">!==</span> <span class="nx">matchedCount</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1730'>				<span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1731'>				<span class="k">while</span> <span class="p">(</span> <span class="p">(</span><span class="nx">matcher</span> <span class="o">=</span> <span class="nx">setMatchers</span><span class="p">[</span><span class="nx">j</span><span class="o">++</span><span class="p">])</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1732'>					<span class="nx">matcher</span><span class="p">(</span> <span class="nx">unmatched</span><span class="p">,</span> <span class="nx">setMatched</span><span class="p">,</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">xml</span> <span class="p">);</span></div><div class='line' id='LC1733'>				<span class="p">}</span></div><div class='line' id='LC1734'><br/></div><div class='line' id='LC1735'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">seed</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1736'>					<span class="c1">// Reintegrate element matches to eliminate the need for sorting</span></div><div class='line' id='LC1737'>					<span class="k">if</span> <span class="p">(</span> <span class="nx">matchedCount</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1738'>						<span class="k">while</span> <span class="p">(</span> <span class="nx">i</span><span class="o">--</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1739'>							<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="p">(</span><span class="nx">unmatched</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">||</span> <span class="nx">setMatched</span><span class="p">[</span><span class="nx">i</span><span class="p">])</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1740'>								<span class="nx">setMatched</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">pop</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span> <span class="nx">results</span> <span class="p">);</span></div><div class='line' id='LC1741'>							<span class="p">}</span></div><div class='line' id='LC1742'>						<span class="p">}</span></div><div class='line' id='LC1743'>					<span class="p">}</span></div><div class='line' id='LC1744'><br/></div><div class='line' id='LC1745'>					<span class="c1">// Discard index placeholder values to get only actual matches</span></div><div class='line' id='LC1746'>					<span class="nx">setMatched</span> <span class="o">=</span> <span class="nx">condense</span><span class="p">(</span> <span class="nx">setMatched</span> <span class="p">);</span></div><div class='line' id='LC1747'>				<span class="p">}</span></div><div class='line' id='LC1748'><br/></div><div class='line' id='LC1749'>				<span class="c1">// Add matches to results</span></div><div class='line' id='LC1750'>				<span class="nx">push</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span> <span class="nx">results</span><span class="p">,</span> <span class="nx">setMatched</span> <span class="p">);</span></div><div class='line' id='LC1751'><br/></div><div class='line' id='LC1752'>				<span class="c1">// Seedless set matches succeeding multiple successful matchers stipulate sorting</span></div><div class='line' id='LC1753'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">outermost</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">seed</span> <span class="o">&amp;&amp;</span> <span class="nx">setMatched</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC1754'>					<span class="p">(</span> <span class="nx">matchedCount</span> <span class="o">+</span> <span class="nx">setMatchers</span><span class="p">.</span><span class="nx">length</span> <span class="p">)</span> <span class="o">&gt;</span> <span class="mi">1</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1755'><br/></div><div class='line' id='LC1756'>					<span class="nx">Sizzle</span><span class="p">.</span><span class="nx">uniqueSort</span><span class="p">(</span> <span class="nx">results</span> <span class="p">);</span></div><div class='line' id='LC1757'>				<span class="p">}</span></div><div class='line' id='LC1758'>			<span class="p">}</span></div><div class='line' id='LC1759'><br/></div><div class='line' id='LC1760'>			<span class="c1">// Override manipulation of globals by nested matchers</span></div><div class='line' id='LC1761'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">outermost</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1762'>				<span class="nx">dirruns</span> <span class="o">=</span> <span class="nx">dirrunsUnique</span><span class="p">;</span></div><div class='line' id='LC1763'>				<span class="nx">outermostContext</span> <span class="o">=</span> <span class="nx">contextBackup</span><span class="p">;</span></div><div class='line' id='LC1764'>			<span class="p">}</span></div><div class='line' id='LC1765'><br/></div><div class='line' id='LC1766'>			<span class="k">return</span> <span class="nx">unmatched</span><span class="p">;</span></div><div class='line' id='LC1767'>		<span class="p">};</span></div><div class='line' id='LC1768'><br/></div><div class='line' id='LC1769'>	<span class="k">return</span> <span class="nx">bySet</span> <span class="o">?</span></div><div class='line' id='LC1770'>		<span class="nx">markFunction</span><span class="p">(</span> <span class="nx">superMatcher</span> <span class="p">)</span> <span class="o">:</span></div><div class='line' id='LC1771'>		<span class="nx">superMatcher</span><span class="p">;</span></div><div class='line' id='LC1772'><span class="p">}</span></div><div class='line' id='LC1773'><br/></div><div class='line' id='LC1774'><span class="nx">compile</span> <span class="o">=</span> <span class="nx">Sizzle</span><span class="p">.</span><span class="nx">compile</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">selector</span><span class="p">,</span> <span class="nx">group</span> <span class="cm">/* Internal Use Only */</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1775'>	<span class="kd">var</span> <span class="nx">i</span><span class="p">,</span></div><div class='line' id='LC1776'>		<span class="nx">setMatchers</span> <span class="o">=</span> <span class="p">[],</span></div><div class='line' id='LC1777'>		<span class="nx">elementMatchers</span> <span class="o">=</span> <span class="p">[],</span></div><div class='line' id='LC1778'>		<span class="nx">cached</span> <span class="o">=</span> <span class="nx">compilerCache</span><span class="p">[</span> <span class="nx">selector</span> <span class="o">+</span> <span class="s2">&quot; &quot;</span> <span class="p">];</span></div><div class='line' id='LC1779'><br/></div><div class='line' id='LC1780'>	<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">cached</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1781'>		<span class="c1">// Generate a function of recursive functions that can be used to check each element</span></div><div class='line' id='LC1782'>		<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">group</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1783'>			<span class="nx">group</span> <span class="o">=</span> <span class="nx">tokenize</span><span class="p">(</span> <span class="nx">selector</span> <span class="p">);</span></div><div class='line' id='LC1784'>		<span class="p">}</span></div><div class='line' id='LC1785'>		<span class="nx">i</span> <span class="o">=</span> <span class="nx">group</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC1786'>		<span class="k">while</span> <span class="p">(</span> <span class="nx">i</span><span class="o">--</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1787'>			<span class="nx">cached</span> <span class="o">=</span> <span class="nx">matcherFromTokens</span><span class="p">(</span> <span class="nx">group</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="p">);</span></div><div class='line' id='LC1788'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">cached</span><span class="p">[</span> <span class="nx">expando</span> <span class="p">]</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1789'>				<span class="nx">setMatchers</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">cached</span> <span class="p">);</span></div><div class='line' id='LC1790'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1791'>				<span class="nx">elementMatchers</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">cached</span> <span class="p">);</span></div><div class='line' id='LC1792'>			<span class="p">}</span></div><div class='line' id='LC1793'>		<span class="p">}</span></div><div class='line' id='LC1794'><br/></div><div class='line' id='LC1795'>		<span class="c1">// Cache the compiled function</span></div><div class='line' id='LC1796'>		<span class="nx">cached</span> <span class="o">=</span> <span class="nx">compilerCache</span><span class="p">(</span> <span class="nx">selector</span><span class="p">,</span> <span class="nx">matcherFromGroupMatchers</span><span class="p">(</span> <span class="nx">elementMatchers</span><span class="p">,</span> <span class="nx">setMatchers</span> <span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC1797'>	<span class="p">}</span></div><div class='line' id='LC1798'>	<span class="k">return</span> <span class="nx">cached</span><span class="p">;</span></div><div class='line' id='LC1799'><span class="p">};</span></div><div class='line' id='LC1800'><br/></div><div class='line' id='LC1801'><span class="kd">function</span> <span class="nx">multipleContexts</span><span class="p">(</span> <span class="nx">selector</span><span class="p">,</span> <span class="nx">contexts</span><span class="p">,</span> <span class="nx">results</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1802'>	<span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC1803'>		<span class="nx">len</span> <span class="o">=</span> <span class="nx">contexts</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC1804'>	<span class="k">for</span> <span class="p">(</span> <span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1805'>		<span class="nx">Sizzle</span><span class="p">(</span> <span class="nx">selector</span><span class="p">,</span> <span class="nx">contexts</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span> <span class="nx">results</span> <span class="p">);</span></div><div class='line' id='LC1806'>	<span class="p">}</span></div><div class='line' id='LC1807'>	<span class="k">return</span> <span class="nx">results</span><span class="p">;</span></div><div class='line' id='LC1808'><span class="p">}</span></div><div class='line' id='LC1809'><br/></div><div class='line' id='LC1810'><span class="kd">function</span> <span class="nx">select</span><span class="p">(</span> <span class="nx">selector</span><span class="p">,</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">results</span><span class="p">,</span> <span class="nx">seed</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1811'>	<span class="kd">var</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">tokens</span><span class="p">,</span> <span class="nx">token</span><span class="p">,</span> <span class="nx">type</span><span class="p">,</span> <span class="nx">find</span><span class="p">,</span></div><div class='line' id='LC1812'>		<span class="nx">match</span> <span class="o">=</span> <span class="nx">tokenize</span><span class="p">(</span> <span class="nx">selector</span> <span class="p">);</span></div><div class='line' id='LC1813'><br/></div><div class='line' id='LC1814'>	<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">seed</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1815'>		<span class="c1">// Try to minimize operations if there is only one group</span></div><div class='line' id='LC1816'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">match</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">1</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1817'><br/></div><div class='line' id='LC1818'>			<span class="c1">// Take a shortcut and set the context if the root selector is an ID</span></div><div class='line' id='LC1819'>			<span class="nx">tokens</span> <span class="o">=</span> <span class="nx">match</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">=</span> <span class="nx">match</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">slice</span><span class="p">(</span> <span class="mi">0</span> <span class="p">);</span></div><div class='line' id='LC1820'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">tokens</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">2</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">token</span> <span class="o">=</span> <span class="nx">tokens</span><span class="p">[</span><span class="mi">0</span><span class="p">]).</span><span class="nx">type</span> <span class="o">===</span> <span class="s2">&quot;ID&quot;</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC1821'>					<span class="nx">context</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">9</span> <span class="o">&amp;&amp;</span> <span class="nx">documentIsHTML</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC1822'>					<span class="nx">Expr</span><span class="p">.</span><span class="nx">relative</span><span class="p">[</span> <span class="nx">tokens</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nx">type</span> <span class="p">]</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1823'><br/></div><div class='line' id='LC1824'>				<span class="nx">context</span> <span class="o">=</span> <span class="p">(</span> <span class="nx">Expr</span><span class="p">.</span><span class="nx">find</span><span class="p">[</span><span class="s2">&quot;ID&quot;</span><span class="p">](</span> <span class="nx">token</span><span class="p">.</span><span class="nx">matches</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">replace</span><span class="p">(</span><span class="nx">runescape</span><span class="p">,</span> <span class="nx">funescape</span><span class="p">),</span> <span class="nx">context</span> <span class="p">)</span> <span class="o">||</span> <span class="p">[]</span> <span class="p">)[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC1825'>				<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">context</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1826'>					<span class="k">return</span> <span class="nx">results</span><span class="p">;</span></div><div class='line' id='LC1827'>				<span class="p">}</span></div><div class='line' id='LC1828'><br/></div><div class='line' id='LC1829'>				<span class="nx">selector</span> <span class="o">=</span> <span class="nx">selector</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span> <span class="nx">tokens</span><span class="p">.</span><span class="nx">shift</span><span class="p">().</span><span class="nx">value</span><span class="p">.</span><span class="nx">length</span> <span class="p">);</span></div><div class='line' id='LC1830'>			<span class="p">}</span></div><div class='line' id='LC1831'><br/></div><div class='line' id='LC1832'>			<span class="c1">// Fetch a seed set for right-to-left matching</span></div><div class='line' id='LC1833'>			<span class="nx">i</span> <span class="o">=</span> <span class="nx">matchExpr</span><span class="p">[</span><span class="s2">&quot;needsContext&quot;</span><span class="p">].</span><span class="nx">test</span><span class="p">(</span> <span class="nx">selector</span> <span class="p">)</span> <span class="o">?</span> <span class="mi">0</span> <span class="o">:</span> <span class="nx">tokens</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC1834'>			<span class="k">while</span> <span class="p">(</span> <span class="nx">i</span><span class="o">--</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1835'>				<span class="nx">token</span> <span class="o">=</span> <span class="nx">tokens</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC1836'><br/></div><div class='line' id='LC1837'>				<span class="c1">// Abort if we hit a combinator</span></div><div class='line' id='LC1838'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">Expr</span><span class="p">.</span><span class="nx">relative</span><span class="p">[</span> <span class="p">(</span><span class="nx">type</span> <span class="o">=</span> <span class="nx">token</span><span class="p">.</span><span class="nx">type</span><span class="p">)</span> <span class="p">]</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1839'>					<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC1840'>				<span class="p">}</span></div><div class='line' id='LC1841'>				<span class="k">if</span> <span class="p">(</span> <span class="p">(</span><span class="nx">find</span> <span class="o">=</span> <span class="nx">Expr</span><span class="p">.</span><span class="nx">find</span><span class="p">[</span> <span class="nx">type</span> <span class="p">])</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1842'>					<span class="c1">// Search, expanding context for leading sibling combinators</span></div><div class='line' id='LC1843'>					<span class="k">if</span> <span class="p">(</span> <span class="p">(</span><span class="nx">seed</span> <span class="o">=</span> <span class="nx">find</span><span class="p">(</span></div><div class='line' id='LC1844'>						<span class="nx">token</span><span class="p">.</span><span class="nx">matches</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">replace</span><span class="p">(</span> <span class="nx">runescape</span><span class="p">,</span> <span class="nx">funescape</span> <span class="p">),</span></div><div class='line' id='LC1845'>						<span class="nx">rsibling</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span> <span class="nx">tokens</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">type</span> <span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">context</span><span class="p">.</span><span class="nx">parentNode</span> <span class="o">||</span> <span class="nx">context</span></div><div class='line' id='LC1846'>					<span class="p">))</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1847'><br/></div><div class='line' id='LC1848'>						<span class="c1">// If seed is empty or no tokens remain, we can return early</span></div><div class='line' id='LC1849'>						<span class="nx">tokens</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span> <span class="nx">i</span><span class="p">,</span> <span class="mi">1</span> <span class="p">);</span></div><div class='line' id='LC1850'>						<span class="nx">selector</span> <span class="o">=</span> <span class="nx">seed</span><span class="p">.</span><span class="nx">length</span> <span class="o">&amp;&amp;</span> <span class="nx">toSelector</span><span class="p">(</span> <span class="nx">tokens</span> <span class="p">);</span></div><div class='line' id='LC1851'>						<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">selector</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1852'>							<span class="nx">push</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span> <span class="nx">results</span><span class="p">,</span> <span class="nx">seed</span> <span class="p">);</span></div><div class='line' id='LC1853'>							<span class="k">return</span> <span class="nx">results</span><span class="p">;</span></div><div class='line' id='LC1854'>						<span class="p">}</span></div><div class='line' id='LC1855'><br/></div><div class='line' id='LC1856'>						<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC1857'>					<span class="p">}</span></div><div class='line' id='LC1858'>				<span class="p">}</span></div><div class='line' id='LC1859'>			<span class="p">}</span></div><div class='line' id='LC1860'>		<span class="p">}</span></div><div class='line' id='LC1861'>	<span class="p">}</span></div><div class='line' id='LC1862'><br/></div><div class='line' id='LC1863'>	<span class="c1">// Compile and execute a filtering function</span></div><div class='line' id='LC1864'>	<span class="c1">// Provide `match` to avoid retokenization if we modified the selector above</span></div><div class='line' id='LC1865'>	<span class="nx">compile</span><span class="p">(</span> <span class="nx">selector</span><span class="p">,</span> <span class="nx">match</span> <span class="p">)(</span></div><div class='line' id='LC1866'>		<span class="nx">seed</span><span class="p">,</span></div><div class='line' id='LC1867'>		<span class="nx">context</span><span class="p">,</span></div><div class='line' id='LC1868'>		<span class="o">!</span><span class="nx">documentIsHTML</span><span class="p">,</span></div><div class='line' id='LC1869'>		<span class="nx">results</span><span class="p">,</span></div><div class='line' id='LC1870'>		<span class="nx">rsibling</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span> <span class="nx">selector</span> <span class="p">)</span></div><div class='line' id='LC1871'>	<span class="p">);</span></div><div class='line' id='LC1872'>	<span class="k">return</span> <span class="nx">results</span><span class="p">;</span></div><div class='line' id='LC1873'><span class="p">}</span></div><div class='line' id='LC1874'><br/></div><div class='line' id='LC1875'><span class="c1">// Deprecated</span></div><div class='line' id='LC1876'><span class="nx">Expr</span><span class="p">.</span><span class="nx">pseudos</span><span class="p">[</span><span class="s2">&quot;nth&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">Expr</span><span class="p">.</span><span class="nx">pseudos</span><span class="p">[</span><span class="s2">&quot;eq&quot;</span><span class="p">];</span></div><div class='line' id='LC1877'><br/></div><div class='line' id='LC1878'><span class="c1">// Easy API for creating new setFilters</span></div><div class='line' id='LC1879'><span class="kd">function</span> <span class="nx">setFilters</span><span class="p">()</span> <span class="p">{}</span></div><div class='line' id='LC1880'><span class="nx">setFilters</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="nx">Expr</span><span class="p">.</span><span class="nx">filters</span> <span class="o">=</span> <span class="nx">Expr</span><span class="p">.</span><span class="nx">pseudos</span><span class="p">;</span></div><div class='line' id='LC1881'><span class="nx">Expr</span><span class="p">.</span><span class="nx">setFilters</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">setFilters</span><span class="p">();</span></div><div class='line' id='LC1882'><br/></div><div class='line' id='LC1883'><span class="c1">// One-time assignments</span></div><div class='line' id='LC1884'><br/></div><div class='line' id='LC1885'><span class="c1">// Sort stability</span></div><div class='line' id='LC1886'><span class="nx">support</span><span class="p">.</span><span class="nx">sortStable</span> <span class="o">=</span> <span class="nx">expando</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;&quot;</span><span class="p">).</span><span class="nx">sort</span><span class="p">(</span> <span class="nx">sortOrder</span> <span class="p">).</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;&quot;</span><span class="p">)</span> <span class="o">===</span> <span class="nx">expando</span><span class="p">;</span></div><div class='line' id='LC1887'><br/></div><div class='line' id='LC1888'><span class="c1">// Initialize against the default document</span></div><div class='line' id='LC1889'><span class="nx">setDocument</span><span class="p">();</span></div><div class='line' id='LC1890'><br/></div><div class='line' id='LC1891'><span class="c1">// Support: Chrome&lt;&lt;14</span></div><div class='line' id='LC1892'><span class="c1">// Always assume duplicates if they aren&#39;t passed to the comparison function</span></div><div class='line' id='LC1893'><span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">].</span><span class="nx">sort</span><span class="p">(</span> <span class="nx">sortOrder</span> <span class="p">);</span></div><div class='line' id='LC1894'><span class="nx">support</span><span class="p">.</span><span class="nx">detectDuplicates</span> <span class="o">=</span> <span class="nx">hasDuplicate</span><span class="p">;</span></div><div class='line' id='LC1895'><br/></div><div class='line' id='LC1896'><span class="c1">// Support: IE&lt;8</span></div><div class='line' id='LC1897'><span class="c1">// Prevent attribute/property &quot;interpolation&quot;</span></div><div class='line' id='LC1898'><span class="nx">assert</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">div</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1899'>	<span class="nx">div</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="s2">&quot;&lt;a href=&#39;#&#39;&gt;&lt;/a&gt;&quot;</span><span class="p">;</span></div><div class='line' id='LC1900'>	<span class="k">if</span> <span class="p">(</span> <span class="nx">div</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;href&quot;</span><span class="p">)</span> <span class="o">!==</span> <span class="s2">&quot;#&quot;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1901'>		<span class="kd">var</span> <span class="nx">attrs</span> <span class="o">=</span> <span class="s2">&quot;type|href|height|width&quot;</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;|&quot;</span><span class="p">),</span></div><div class='line' id='LC1902'>			<span class="nx">i</span> <span class="o">=</span> <span class="nx">attrs</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC1903'>		<span class="k">while</span> <span class="p">(</span> <span class="nx">i</span><span class="o">--</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1904'>			<span class="nx">Expr</span><span class="p">.</span><span class="nx">attrHandle</span><span class="p">[</span> <span class="nx">attrs</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="p">]</span> <span class="o">=</span> <span class="nx">interpolationHandler</span><span class="p">;</span></div><div class='line' id='LC1905'>		<span class="p">}</span></div><div class='line' id='LC1906'>	<span class="p">}</span></div><div class='line' id='LC1907'><span class="p">});</span></div><div class='line' id='LC1908'><br/></div><div class='line' id='LC1909'><span class="c1">// Support: IE&lt;9</span></div><div class='line' id='LC1910'><span class="c1">// Use getAttributeNode to fetch booleans when getAttribute lies</span></div><div class='line' id='LC1911'><span class="nx">assert</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">div</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1912'>	<span class="k">if</span> <span class="p">(</span> <span class="nx">div</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;disabled&quot;</span><span class="p">)</span> <span class="o">!=</span> <span class="kc">null</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1913'>		<span class="kd">var</span> <span class="nx">attrs</span> <span class="o">=</span> <span class="nx">booleans</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;|&quot;</span><span class="p">),</span></div><div class='line' id='LC1914'>			<span class="nx">i</span> <span class="o">=</span> <span class="nx">attrs</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC1915'>		<span class="k">while</span> <span class="p">(</span> <span class="nx">i</span><span class="o">--</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1916'>			<span class="nx">Expr</span><span class="p">.</span><span class="nx">attrHandle</span><span class="p">[</span> <span class="nx">attrs</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="p">]</span> <span class="o">=</span> <span class="nx">boolHandler</span><span class="p">;</span></div><div class='line' id='LC1917'>		<span class="p">}</span></div><div class='line' id='LC1918'>	<span class="p">}</span></div><div class='line' id='LC1919'><span class="p">});</span></div><div class='line' id='LC1920'><br/></div><div class='line' id='LC1921'><span class="c1">// EXPOSE</span></div><div class='line' id='LC1922'><span class="k">if</span> <span class="p">(</span> <span class="k">typeof</span> <span class="nx">define</span> <span class="o">===</span> <span class="s2">&quot;function&quot;</span> <span class="o">&amp;&amp;</span> <span class="nx">define</span><span class="p">.</span><span class="nx">amd</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1923'>	<span class="nx">define</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">Sizzle</span><span class="p">;</span> <span class="p">});</span></div><div class='line' id='LC1924'><span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1925'>	<span class="nb">window</span><span class="p">.</span><span class="nx">Sizzle</span> <span class="o">=</span> <span class="nx">Sizzle</span><span class="p">;</span></div><div class='line' id='LC1926'><span class="p">}</span></div><div class='line' id='LC1927'><span class="c1">// EXPOSE</span></div><div class='line' id='LC1928'><br/></div><div class='line' id='LC1929'><span class="p">})(</span> <span class="nb">window</span> <span class="p">);</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1347543529" height="64" width="64">
</div>


        </div>
      </div>
      <div class="modal-backdrop"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="/about">About us</a></dd>
        <dd><a href="/blog">Blog</a></dd>
        <dd><a href="/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.05406s from fe13.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>
    <ul id="legal">
        <li><a href="/site/terms">Terms of Service</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/jquery/sizzle/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="octicon octicon-remove-close ajax-error-dismiss"></a>
    </div>

    
    <span id='server_response_time' data-time='0.05444' data-host='fe13'></span>
    
  </body>
</html>

