import React from "react";
import { Route, Switch } from "react-router-dom";

import NavigationPage from "./pages/demonstration/NavigationPage";
import FormsNavPage from "./pages/demonstration/FormsNavPage";
import TablesNavPage from "./pages/demonstration/TablesNavPage";
import ModalsNavPage from "./pages/demonstration/ModalsNavPage";

// FREE
import AnimationPage from "./pages/demonstration/AnimationPage";
import HomePage from "./pages/demonstration/HomePage";
import ButtonPage from "./pages/demonstration/ButtonPage";
import CSSPage from "./pages/demonstration/CSSPage";
import TablePage from "./pages/demonstration/TablePage";
import TableResponsivePage from "./pages/demonstration/TableResponsivePage";
import TableScrollPage from "./pages/demonstration/TableScrollPage";
import TableStylesPage from "./pages/demonstration/TableStylesPage";
import BadgePage from "./pages/demonstration/BadgePage";
import BreadcrumbPage from "./pages/demonstration/BreadcrumbPage";
import FaPage from "./pages/demonstration/FaPage";
import ComponentsPage from "./pages/demonstration/ComponentsPage";
import DatatablePage from "./pages/demonstration/DatatablePage";
import DatatableApiPage from "./pages/demonstration/DatatableApiPage";
import ModalPage from "./pages/demonstration/ModalPage";
import ModalFormPage from "./pages/demonstration/ModalFormPage";
import ModalExamplesPage from "./pages/demonstration/ModalExamplesPage";
import AdvancedPage from "./pages/demonstration/AdvancedPage";
import ProgressPage from "./pages/demonstration/ProgressPage";
import InputPage from "./pages/demonstration/InputPage";
import MediaPage from "./pages/demonstration/MediaPage";
import JumbotronPage from "./pages/demonstration/JumbotronPage";
import AlertPage from "./pages/demonstration/AlertPage";
import CardsPage from "./pages/demonstration/CardsPage";
import PaginationPage from "./pages/demonstration/PaginationPage";
import PopoverPage from "./pages/demonstration/PopoverPage";
import ListGroupPage from "./pages/demonstration/ListGroupPage";
import CarouselPage from "./pages/demonstration/CarouselPage";
import PanelPage from "./pages/demonstration/PanelPage";
import CollapsePage from "./pages/demonstration/CollapsePage";
import TooltipsPage from "./pages/demonstration/TooltipsPage";
import FooterPage from "./pages/demonstration/FooterPage";
import MasksPage from "./pages/demonstration/MasksPage";
import DropdownPage from "./pages/demonstration/DropdownPage";
import VideoCarouselPage from "./pages/demonstration/VideoCarouselPage";
import HoverPage from "./pages/demonstration/HoverPage";
import FormsPage from "./pages/demonstration/FormsPage";
import ChartsPage from "./pages/demonstration/ChartsPage";
import SearchPage from "./pages/demonstration/SearchPage";
import ValidationPage from "./pages/demonstration/ValidationPage";
import NavbarPage from "./pages/demonstration/NavbarPage";
import IframePage from "./pages/demonstration/IframePage";

import MainPage from "./pages/MainPage";
import ViewPost from "./pages/ViewPost";
import CreatePost from "./pages/CreatePost";
import PostsPage from "./pages/PostsPage";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/post" component={ViewPost} />
        <Route exact path="/posts" component={PostsPage} />
        <Route exact path="/post/create" component={CreatePost} />


        {/*Demonstration*/}
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/css" component={CSSPage} />
        <Route exact path="/components" component={ComponentsPage} />
        <Route exact path="/advanced" component={AdvancedPage} />
        <Route exact path="/navigation" component={NavigationPage} />
        <Route exact path="/forms" component={FormsNavPage} />
        <Route exact path="/tables" component={TablesNavPage} />
        <Route exact path="/modals" component={ModalsNavPage} />

        {/* FREE */}
        <Route path="/css/animations" component={AnimationPage} />
        <Route exact path="/tables/table" component={TablePage} />
        <Route
          path="/tables/table-responsive"
          component={TableResponsivePage}
        />
        <Route path="/tables/table-scroll" component={TableScrollPage} />
        <Route path="/tables/table-styles" component={TableStylesPage} />
        <Route path="/components/badge" component={BadgePage} />
        <Route path="/navigation/breadcrumb" component={BreadcrumbPage} />
        <Route path="/navigation/navbar" component={NavbarPage} />
        <Route path="/components/media" component={MediaPage} />
        <Route path="/forms/input" component={InputPage} />
        <Route path="/components/alert" component={AlertPage} />
        <Route path="/components/dropdown" component={DropdownPage} />
        <Route path="/css/icons" component={FaPage} />
        <Route path="/css/jumbotron" component={JumbotronPage} />
        <Route path="/components/cards" component={CardsPage} />
        <Route path="/components/buttons" component={ButtonPage} />
        <Route path="/forms/forms" component={FormsPage} />
        <Route path="/components/progress" component={ProgressPage} />
        <Route path="/advanced/popover" component={PopoverPage} />
        <Route path="/components/pagination" component={PaginationPage} />
        <Route path="/components/list-group" component={ListGroupPage} />
        <Route path="/advanced/tooltips" component={TooltipsPage} />
        <Route path="/navigation/footer" component={FooterPage} />
        <Route path="/modals/modal" component={ModalPage} />
        <Route path="/modals/modal-form" component={ModalFormPage} />
        <Route path="/modals/modal-examples" component={ModalExamplesPage} />
        <Route path="/advanced/carousel" component={CarouselPage} />
        <Route path="/advanced/collapse" component={CollapsePage} />
        <Route path="/advanced/videocarousel" component={VideoCarouselPage} />
        <Route path="/css/masks" component={MasksPage} />
        <Route path="/css/hover" component={HoverPage} />
        <Route path="/advanced/videocarousel" component={VideoCarouselPage} />
        <Route path="/advanced/charts" component={ChartsPage} />
        <Route path="/components/panels" component={PanelPage} />
        <Route path="/components/search" component={SearchPage} />
        <Route path="/forms/validation" component={ValidationPage} />
        <Route path="/tables/datatable" component={DatatablePage} />
        <Route path="/tables/datatable-api" component={DatatableApiPage} />
        <Route path="/components/iframe" component={IframePage} />
        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
