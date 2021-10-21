import { Component } from "react";
import "./App.css";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Modal } from "./Modal/Modal";
import { Spinner } from "./Loader/Loader";
import { Button } from "./Button/Button";
import { fetchImages } from "../Utils/API";

class App extends Component {
  state = {
    allImages: [],
    selectedImage: null,
    reqStatus: null,
    request: "",
    page: 1,
  };

  handleSelectImage = (image) => {
    this.setState({ selectedImage: image });
  };

  async componentDidUpdate(_, prevState) {
    const { request, page } = this.state;

    if (prevState.request !== request || prevState.page !== page) {
      this.setState({ reqStatus: "loading" });
      const result = await fetchImages(request, page);
      this.setState((prevState) => ({
        allImages: [...prevState.allImages, ...result.hits],
      }));
      this.setState({ reqStatus: null });
    }

    if (prevState.page !== page) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  handleSubmit = (request) => {
    this.setState({ allImages: [], request: request });
  };

  loadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  render() {
    const { allImages, selectedImage, reqStatus } = this.state;
    const shouldLoadMore = Boolean(allImages.length);

    return (
      <div className="App">
        <Searchbar onClick={this.handleSubmit} />
        <ImageGallery data={allImages} onSelect={this.handleSelectImage} />
        {selectedImage && (
          <Modal link={selectedImage} modalToggle={this.handleSelectImage} />
        )}
        {shouldLoadMore && !reqStatus && <Button onClick={this.loadMore} />}
        {reqStatus && <Spinner />}
      </div>
    );
  }
}

export default App;
