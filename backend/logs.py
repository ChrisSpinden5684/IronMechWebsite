import logging

def get_logger(name):
    logger = logging.getLogger(name)
    logger.setLevel(logging.INFO)
    
    #Avoids adding handlers multiple times
    if not logger.handlers:
        fileHandler = logging.FileHandler("server.log")
        fileFormat = logging.Formatter("%(asctime)s - %(levelname)s - %(message)s", 
        datefmt="%Y-%m-%d %H:%M:%S")
        fileHandler.setFormatter(fileFormat)
        logger.addHandler(fileHandler)

    return logger
